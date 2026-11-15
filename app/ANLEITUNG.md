# Onstand als iPhone-App (Testphase, kostenlos)

Die App ist eine Hülle um die Web-Fassung auf GitHub Pages. Sie lädt beim Start immer die aktuelle `onstand.html` –
neue Fassungen brauchst du also NICHT neu zu bauen, nur wie gewohnt `onstand.html` hochladen.
Neu bauen musst du nur, wenn sich etwas an der Hülle ändert (Ordner `app`).

## 1 · Einmalig: Dateien zu GitHub
1. Repo `2ronaar1/Onstand` öffnen → **Add file** → **Upload files** → den Ordner **`app`** aus deinem Onstand-Ordner ins Fenster ziehen → **Commit changes**.
2. Dann **Add file** → **Create new file**. Als Namen genau eintippen: `.github/workflows/onstand-iphone.yml`
   (beim Tippen der Schrägstriche legt GitHub die Ordner selbst an).
3. Den Inhalt der Datei `app/onstand-iphone.yml` (mit dem Editor öffnen, alles markieren, kopieren) ins große Feld einfügen → **Commit changes**.

## 2 · App bauen lassen (ca. 10 Minuten)
1. Im Repo oben auf **Actions** klicken. Falls gefragt: Workflows aktivieren.
2. Links **iPhone-App bauen** → rechts **Run workflow** → **Run workflow**.
   (Nach dem Hochladen startet der Bau meist schon von selbst.)
3. Grüner Haken = fertig. Lauf anklicken → unten bei **Artifacts** → **Onstand-iPhone-App** herunterladen.
4. Die ZIP-Datei entpacken → darin liegt **Onstand.ipa**.
   Roter Fehler? Lauf anklicken, den roten Schritt öffnen und Claude einen Screenshot schicken.

## 3 · Aufs iPhone (Windows-Laptop)
1. **iTunes** von apple.com installieren (nicht aus dem Microsoft Store) – Sideloadly braucht dessen Treiber.
2. **Sideloadly** von sideloadly.io installieren und öffnen.
3. iPhone per Kabel anschließen, am iPhone „Vertrauen“ tippen.
4. `Onstand.ipa` in Sideloadly ziehen, deine Apple-ID eintragen → **Start**.
5. Am iPhone: **Einstellungen → Allgemein → VPN & Geräteverwaltung** → deine Apple-ID → **Vertrauen**.
6. Beim ersten Mal: **Einstellungen → Datenschutz & Sicherheit → Entwicklermodus** einschalten, iPhone neu starten.

## Grenzen der kostenlosen Apple-ID
- Die App läuft **7 Tage**, dann einfach in Sideloadly erneut auf **Start** (Daten bleiben).
- Höchstens 3 solcher Apps pro iPhone.
- Für Kunden/Team später: Apple-Entwicklerkonto (99 €/Jahr) → TestFlight bzw. App Store.
