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
  it("omits cents for whole-euro Dutch prices", () => {
    assert.doesNotMatch(JSON.stringify(locale), /€ ?\d+,00/);
  });

  it("matches the requested lodging price and detail text", () => {
    assert.deepEqual(locale.rates.chambresItems.longere, {
      name: "La Longère (gîte)",
      price: "€80",
      details:
        "Basisprijs voor 2 personen.\nExtra volwassene of kind: + € 40 p.p.p.n\n(Geschikt voor 2-7 personen, eigen badkamer)",
    });

    assert.deepEqual(locale.rates.chambresItems.chezMarco, {
      name: "Chez Marco",
      price: "€80",
      details:
        "Basisprijs voor 2 personen.\nExtra volwassene of kind: + € 40 p.p.p.n\n(Geschikt tot 6 personen)",
    });
  });

  it("formats Dutch rates with cents only when needed", () => {
    assert.equal(locale.home.tableSection.kids, "Kinderen t/m 10 jaar: hoofdgerecht + toetje of ijsje — €10");
    assert.equal(locale.rates.campingItems.pitch.price, "€20");
    assert.equal(locale.rates.chambresItems.smallCaravan.price, "€60");
    assert.equal(locale.rates.chambresItems.luxuryTent.price, "€60");
    assert.equal(locale.rates.chambresItems.bergerie.price, "€60");
    assert.equal(locale.rates.chambresItems.mainRoom.price, "€75");
    assert.equal(locale.rates.tableItems.kids.price, "€10 p.p.");
    assert.equal(locale.rates.tableItems.dinner.price, "€22,50 p.p.");
    assert.equal(locale.rates.tableItems.drinks.price, "€2,50");
    assert.equal(locale.rates.tableItems.breakfast.price, "€6,50 p.p.");
  });

  it("preserves line breaks in lodging detail cells", () => {
    assert.match(ratesPage, /whitespace-pre-line/);
  });
});
