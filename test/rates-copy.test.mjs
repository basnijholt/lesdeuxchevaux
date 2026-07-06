import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, it } from "node:test";

const locale = JSON.parse(
  await readFile(new URL("../src/i18n/locales/nl.json", import.meta.url), "utf8")
);
const ratesPage = await readFile(
  new URL("../src/app/tarieven/page.tsx", import.meta.url),
  "utf8"
);

describe("Dutch rates copy", () => {
  it("matches the requested lodging price and detail text", () => {
    assert.deepEqual(locale.rates.chambresItems.longere, {
      name: "La Longère (gîte)",
      price: "€80",
      details:
        "Basisprijs voor 2 personen.\nExtra volwassene of kind: + € 40,00 p.p.p.n\n(Geschikt voor 2-7 personen, eigen badkamer)",
    });

    assert.deepEqual(locale.rates.chambresItems.chezMarco, {
      name: "Chez Marco",
      price: "€80",
      details:
        "Basisprijs voor 2 personen.\nExtra volwassene of kind: + € 40,00 p.p.p.n\n(Geschikt tot 6 personen)",
    });
  });

  it("preserves line breaks in lodging detail cells", () => {
    assert.match(ratesPage, /whitespace-pre-line/);
  });
});
