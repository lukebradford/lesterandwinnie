// Generates site/media/journey-map.svg — a static, pre-projected world map with
// the Bradfords' places and routes. Run: node tools/build-map.mjs
// Data: Natural Earth via world-atlas (public domain). No runtime dependencies.
import { readFileSync, writeFileSync } from "node:fs";
import { geoEqualEarth, geoPath, geoInterpolate, geoGraticule10 } from "d3-geo";
import { feature, mesh } from "topojson-client";

const here = new URL(".", import.meta.url);
const world = JSON.parse(readFileSync(new URL("node_modules/world-atlas/countries-110m.json", here)));
const land = feature(world, world.objects.land);
const borders = mesh(world, world.objects.countries, (a, b) => a !== b);

const W = 1200, H = 620;
// Fit the map to the band of the world the story covers (roughly 40°S–62°N, 130°W–135°E).
const frame = { type: "MultiPoint", coordinates: [[-130, 62], [135, 62], [-130, -38], [135, -38], [0, 66], [0, -40]] };
const projection = geoEqualEarth().rotate([-5, 0]).fitExtent([[10, 10], [W - 10, H - 10]], frame);
const path = geoPath(projection);
const r = (n) => Math.round(n * 10) / 10;

// [id, label, lon, lat, chapter, labelDx, labelDy, anchor]
export const places = [
  ["enid", "Enid, Okla.", -97.88, 36.4, "roots", -8, 4, "end"],
  ["york", "York, Neb.", -97.59, 40.87, "roots", -6, -9, "end"],
  ["omaha", "Omaha", -95.94, 41.26, "roots", 6, -8, "start"],
  ["redbird", "Red Bird Mission, Ky.", -83.56, 36.94, "roots", 4, 16, "start"],
  ["maine", "Locke Mills, Maine", -70.7, 44.4, "roots", 8, -6, "start"],
  ["missoula", "Missoula", -113.99, 46.87, "roots", 0, -10, "middle"],
  ["cavejunction", "Cave Junction", -123.65, 42.16, "roots", -2, 18, "start"],
  ["newhaven", "New Haven (Yale)", -72.92, 41.31, "yale", 8, 12, "start"],
  ["ithaca", "Ithaca (Cornell)", -76.5, 42.44, "yale", -6, -10, "end"],
  ["london", "London", -0.13, 51.51, "africa", 8, -6, "start"],
  ["freetown", "Freetown", -13.23, 8.48, "africa", -8, -6, "end"],
  ["rotifunk", "Rotifunk", -12.68, 8.23, "africa", -8, 12, "end"],
  ["kayima", "Kayima", -11.0, 8.88, "africa", 8, -6, "start"],
  ["manjama", "Manjama, Bo", -11.74, 7.96, "africa", 8, 12, "start"],
  ["batonrouge", "Louisiana", -91.19, 30.45, "home", -8, 12, "end"],
  ["mountvernon", "Mount Vernon, Wash.", -122.33, 48.42, "home", 8, -8, "start"],
  ["juba", "Juba", 31.58, 4.85, "abroad", 8, 12, "start"],
  ["khartoum", "Khartoum", 32.53, 15.5, "abroad", 8, -6, "start"],
  ["elobeid", "El Obeid", 30.22, 13.18, "abroad", -8, 6, "end"],
  ["tarbela", "Tarbela, Pakistan", 72.7, 34.08, "abroad", 8, -6, "start"],
  ["ukraine", "Ukraine", 31.2, 48.4, "service", 8, -6, "start"],
  ["russia", "Russia", 37.6, 55.75, "service", 8, -6, "start"],
  ["mauritania", "Mauritania", -10.9, 20.3, "service", -8, -4, "end"],
  ["zimbabwe", "Zimbabwe", 29.8, -19.0, "service", 8, 4, "start"],
  ["southafrica", "South Africa", 25.0, -29.0, "service", 8, 6, "start"],
  ["bolivia", "Bolivia", -64.6, -16.3, "service", -8, 4, "end"],
  ["brazil", "Brazil", -47.9, -12.5, "service", 8, 4, "start"],
  ["haiti", "Haiti", -72.3, 18.9, "service", 8, 6, "start"],
  ["philippines", "Philippines", 122.0, 12.5, "service", -8, -6, "end"],
  ["indonesia", "Indonesia", 113.0, -2.5, "service", 0, 16, "middle"],
];
const P = Object.fromEntries(places.map((p) => [p[0], p]));

// Routes, in story order, each tagged with a chapter.
const routes = [
  ["enid", "york", "roots"],
  ["york", "omaha", "roots"],
  ["omaha", "redbird", "roots"],
  ["maine", "missoula", "roots"],
  ["missoula", "cavejunction", "roots"],
  ["redbird", "newhaven", "yale"],
  ["maine", "newhaven", "yale"],
  ["newhaven", "ithaca", "yale"],
  ["redbird", "london", "africa"],
  ["london", "freetown", "africa"],
  ["freetown", "rotifunk", "africa"],
  ["rotifunk", "kayima", "africa"],
  ["kayima", "manjama", "africa"],
  ["manjama", "batonrouge", "home"],
  ["batonrouge", "mountvernon", "home"],
  ["mountvernon", "juba", "abroad"],
  ["juba", "khartoum", "abroad"],
  ["khartoum", "tarbela", "abroad"],
  ["tarbela", "elobeid", "abroad"],
  ...["ukraine", "russia", "mauritania", "zimbabwe", "southafrica", "bolivia", "brazil", "haiti", "philippines", "indonesia"].map((d) => ["mountvernon", d, "service"]),
];

function arc(a, b) {
  const A = [P[a][2], P[a][3]], B = [P[b][2], P[b][3]];
  const interp = geoInterpolate(A, B);
  const n = 48, pts = [];
  // lift the line off the great circle slightly so short hops still read as arcs
  const [x0, y0] = projection(A), [x1, y1] = projection(B);
  const len = Math.hypot(x1 - x0, y1 - y0);
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const [x, y] = projection(interp(t));
    const lift = Math.sin(Math.PI * t) * Math.min(90, len * 0.18);
    pts.push(`${r(x)},${r(y - lift)}`);
  }
  return "M" + pts.join("L");
}

const grat = path(geoGraticule10());
let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="jmap" role="img" aria-labelledby="jmap-title jmap-desc">
<title id="jmap-title">Map of the places Lester and Winnie Bradford lived and worked</title>
<desc id="jmap-desc">From Oklahoma, Nebraska, Kentucky, Maine, Montana, Oregon and Connecticut to London and Sierra Leone (Freetown, Rotifunk, Kayima, Manjama); then Louisiana and Washington State; then Juba, Khartoum and El Obeid in Sudan and Tarbela in Pakistan; and volunteer work in Ukraine, Russia, Mauritania, Zimbabwe, South Africa, Bolivia, Brazil, Haiti, the Philippines and Indonesia.</desc>
<path class="jmap-grat" d="${grat}"/>
<path class="jmap-land" d="${path(land)}"/>
<path class="jmap-borders" d="${path(borders)}"/>
<g class="jmap-routes">
${routes.map(([a, b, c]) => `<path class="jmap-route" data-chapter="${c}" d="${arc(a, b)}" pathLength="1"/>`).join("\n")}
</g>
<g class="jmap-places">
${places
  .map(([id, label, lon, lat, c, dx, dy, anchor]) => {
    const [x, y] = projection([lon, lat]);
    return `<g class="jmap-place" data-chapter="${c}" data-id="${id}" transform="translate(${r(x)} ${r(y)})"><circle r="4"/><circle class="jmap-pulse" r="4"/><text x="${dx}" y="${dy}" text-anchor="${anchor}">${label}</text></g>`;
  })
  .join("\n")}
</g>
</svg>`;
svg = svg.replace(/(\d+\.\d)\d+/g, "$1"); // trim precision
writeFileSync(new URL("../site/media/journey-map.svg", here), svg);
console.log("wrote journey-map.svg", (svg.length / 1024).toFixed(1) + " KB");
