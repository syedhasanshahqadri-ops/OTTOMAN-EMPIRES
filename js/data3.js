/* Deep bilingual profiles for all 36 Ottoman sultans.
   Existing original chapters are preserved; 18 total chapters are guaranteed per ruler.
   Uncertain dates and disputed traditions are explicitly identified as such. */
const OTTOMAN_DEEP_PROFILES = [
  {
    "id": "osman-1",
    "born": "c. 1258",
    "died": "c. 1324/1326",
    "epithet": "Founder of the Ottoman dynasty",
    "type": "Frontier leader and state founder",
    "key": "Bapheus (1302); expansion in Bithynia; siege of Bursa begun under his leadership",
    "setting": "Late Seljuk fragmentation, Mongol overlordship and competing Turkmen principalities in north-west Anatolia",
    "gov": "Personal leadership, frontier alliances, local notables and the gradual conversion of a tribal following into a territorial principality",
    "military": "Raids and sieges against Byzantine frontier towns; Bapheus strengthened his reputation, while Bursa remained unconquered until after his death",
    "diplomacy": "Pragmatic alliances with neighbouring Turkmen groups and local Christian communities helped consolidate frontier power",
    "culture": "The early court was modest; religious networks, Sufi lodges and frontier patronage mattered more than monumental imperial architecture",
    "family": "Traditions name Malhun Hatun and Rabia Bala Hatun; Orhan succeeded him. Early genealogies are debated",
    "legacy": "He gave his name to a dynasty that survived for more than six centuries; the details of his life are partly reconstructed from later sources"
  },
  {
    "id": "orhan",
    "born": "c. 1281",
    "died": "1362",
    "epithet": "Orhan Gazi, builder of the early Ottoman state",
    "type": "State-builder and frontier conqueror",
    "key": "Capture of Bursa (1326), İznik (1331), İzmit (1337); foothold at Gallipoli after 1354",
    "setting": "Byzantium was weakened by civil conflict; Anatolian beyliks competed for territory and influence",
    "gov": "Bursa became a capital; coinage, religious foundations, judges and more regular administration strengthened the principality",
    "military": "Conquest of north-west Anatolian towns and the first durable Ottoman bridgehead in Europe; military organisation gradually diversified",
    "diplomacy": "Marriage alliances and cooperation with Byzantine factions complemented warfare; relations with Genoese and Balkan actors became important",
    "culture": "Mosques, madrasas, imarets and public works turned Bursa into an Ottoman urban centre",
    "family": "His sons included Murad and Süleyman; family accounts differ in later chronicles",
    "legacy": "He transformed a frontier principality into a territorial state with an enduring European foothold"
  },
  {
    "id": "murad-1",
    "born": "c. 1326",
    "died": "1389",
    "epithet": "Hüdavendigâr",
    "type": "Territorial conqueror and institutional organiser",
    "key": "Adrianople/Edirne captured and made capital; Maritsa (1371); Kosovo (1389)",
    "setting": "Ottoman power expanded from north-west Anatolia into Thrace and the Balkans, facing Byzantine, Serbian and Bulgarian rulers",
    "gov": "The court, military hierarchy and provincial arrangements became more developed; the ruler increasingly governed a multi-region state",
    "military": "Campaigns brought much of Thrace, Macedonia and parts of Bulgaria under Ottoman influence; he died during the Kosovo campaign",
    "diplomacy": "Vassalage, tribute, dynastic marriages and military pressure were used alongside direct conquest",
    "culture": "Edirne developed as a major political and religious centre; charitable foundations supported the growing capital",
    "family": "Bayezid I succeeded him; accounts of his consorts and children vary",
    "legacy": "His reign established the Ottoman state as a major Balkan power; details of his death at Kosovo are reported differently"
  },
  {
    "id": "bayezid-1",
    "born": "c. 1360",
    "died": "1403",
    "epithet": "Yıldırım Bayezid, the Thunderbolt",
    "type": "Rapid expansionist ruler and military commander",
    "key": "Battle of Nicopolis (1396); siege of Constantinople; defeat at Ankara (1402) by Timur",
    "setting": "The Ottomans faced a coalition of Balkan and western powers while Timur’s empire expanded across Iran and Anatolia",
    "gov": "Centralisation and rapid territorial incorporation increased the sultan’s authority but strained relations with Anatolian beyliks",
    "military": "His swift campaigns expanded Ottoman rule in the Balkans and Anatolia; Ankara ended his military ascendancy",
    "diplomacy": "He alternated warfare with diplomacy, but annexations alarmed neighbouring beyliks and Christian powers",
    "culture": "Bursa and Edirne remained important centres; the court’s resources were directed heavily toward military expansion",
    "family": "His sons Süleyman, İsa, Musa and Mehmed fought over succession after his capture",
    "legacy": "The defeat at Ankara caused the Ottoman Interregnum (1402–1413), showing the risks of overextension"
  },
  {
    "id": "mehmed-1",
    "born": "c. 1382",
    "died": "1421",
    "epithet": "Çelebi Mehmed, restorer of unity",
    "type": "Restorer and consolidator",
    "key": "Victory over rival brothers by 1413; suppression of the Sheikh Bedreddin and Düzmece Mustafa revolts",
    "setting": "The state emerged fractured after Ankara, with rival princes, regional lords and external powers competing for influence",
    "gov": "Re-established central authority, restored revenue and repaired the dynastic structure after a decade of civil war",
    "military": "Campaigns against rival claimants and rebellious regions were aimed at reunification rather than major new conquest",
    "diplomacy": "Careful diplomacy with Byzantium, Balkan rulers and Anatolian beys helped prevent simultaneous wars",
    "culture": "Religious institutions and urban life were restored; Bursa again became a centre of dynastic patronage",
    "family": "Murad II succeeded him; the family and succession tradition was stabilised after civil war",
    "legacy": "He is remembered as the ruler who reunited the Ottoman state and made renewed expansion possible"
  },
  {
    "id": "murad-2",
    "born": "1404",
    "died": "1451",
    "epithet": "Murad II",
    "type": "Military monarch and consolidator",
    "key": "Treaty of Edirne (1444); Varna (1444); Second Kosovo (1448); temporary abdication",
    "setting": "The empire faced a European crusading coalition, internal succession questions and pressure from Anatolian rivals",
    "gov": "He used abdication and recall to manage succession, while strengthening the army and court",
    "military": "Victories at Varna and Kosovo secured Ottoman predominance in much of the Balkans and protected the dynasty",
    "diplomacy": "Truces and treaties with Venice, Hungary and Balkan rulers alternated with major campaigns",
    "culture": "He supported poetry, scholarship, religious foundations and the development of Edirne as a capital",
    "family": "Mehmed II succeeded him; his father-son relationship included the unusual episode of abdication and recall",
    "legacy": "His victories created the stable strategic position from which Mehmed II could conquer Constantinople"
  },
  {
    "id": "mehmed-2",
    "born": "1432",
    "died": "1481",
    "epithet": "Mehmed the Conqueror (Fatih)",
    "type": "Conqueror, centraliser and imperial patron",
    "key": "Conquest of Constantinople (1453); Serbia, Morea, Trebizond and Bosnia campaigns; Otranto expedition (1480)",
    "setting": "The Byzantine Empire had contracted to Constantinople and scattered territories; Ottoman power was positioned between Europe and Asia",
    "gov": "Centralised the state, issued major kanun regulations, reorganised land and court administration and strengthened the imperial household",
    "military": "The conquest of Constantinople transformed the balance of power; campaigns extended Ottoman authority in the Balkans and Anatolia",
    "diplomacy": "He negotiated with Italian powers, Balkan rulers and eastern Muslim states while using warfare to secure strategic corridors",
    "culture": "Rebuilt Constantinople/Istanbul through repopulation, markets, mosques, schools and palace construction; patronised scholars and artists",
    "family": "Bayezid II and Cem were his best-known sons; Cem’s challenge became an international diplomatic issue",
    "legacy": "He transformed the dynasty into an imperial power and made Istanbul its enduring capital"
  },
  {
    "id": "bayezid-2",
    "born": "1447",
    "died": "1512",
    "epithet": "Bayezid the Just (often called Bayezid II)",
    "type": "Consolidator, patron and cautious strategist",
    "key": "Ottoman-Venetian War (1499–1503); eastern campaigns; Cem Sultan dispute; refuge for Sephardic Jews after 1492",
    "setting": "The empire inherited Mehmed II’s conquests but faced dynastic rivalry, Venetian naval power and Safavid influence",
    "gov": "Balanced the central government and provincial interests; patronage and fiscal management were important features of his rule",
    "military": "Naval and land campaigns secured important positions in the Aegean and eastern Mediterranean, though expansion was more cautious than under his father",
    "diplomacy": "The Cem affair drew European powers into Ottoman succession politics; relations with Venice and the Mamluks shifted between conflict and negotiation",
    "culture": "Supported architecture, calligraphy, scholarship and charitable institutions; Istanbul’s urban life continued to grow",
    "family": "Selim I forced his abdication; sons Ahmed and Korkud were involved in succession politics",
    "legacy": "His reign consolidated the empire and demonstrated the diplomatic consequences of dynastic disputes"
  },
  {
    "id": "selim-1",
    "born": "1470",
    "died": "1520",
    "epithet": "Yavuz Sultan Selim",
    "type": "Conqueror and centralising monarch",
    "key": "Chaldiran (1514); conquest of Syria and Egypt (1516–1517); incorporation of the Mamluk domains",
    "setting": "The Safavid state challenged Ottoman authority in eastern Anatolia; the Mamluk sultanate controlled Syria, Egypt and the holy cities’ wider political environment",
    "gov": "A short, forceful reign focused on military command, central authority and integrating newly conquered territories",
    "military": "Defeated Shah Ismail at Chaldiran and defeated the Mamluks at Marj Dabiq and Ridaniya, bringing Syria and Egypt under Ottoman rule",
    "diplomacy": "Relations with Safavids were shaped by rivalry and sectarian-political conflict; the Mamluk conquest altered Ottoman relations with the Red Sea and Indian Ocean",
    "culture": "Cairo, Damascus and the holy cities became central to imperial prestige and administration; new scholarly and religious networks entered the empire",
    "family": "Suleiman I succeeded him; his mother and household are prominent in later dynastic accounts",
    "legacy": "He shifted the empire’s centre of gravity toward the Arab provinces and greatly expanded its resources and responsibilities"
  },
  {
    "id": "suleiman-1",
    "born": "1494/1495",
    "died": "1566",
    "epithet": "Suleiman the Magnificent / Kanuni",
    "type": "Lawgiver, conqueror and cultural patron",
    "key": "Belgrade (1521), Rhodes (1522), Mohács (1526), Vienna siege (1529), Baghdad (1534), Preveza (1538), Szigetvár (1566)",
    "setting": "Ottoman power reached across central Europe, the Mediterranean, North Africa and the Middle East; Habsburg and Safavid rivalry shaped policy",
    "gov": "Law codes, fiscal regulation, provincial administration and imperial institutions were refined; grand viziers and scribal officials played major roles",
    "military": "Campaigns against Hungary, the Habsburgs and Safavids; naval power under Hayreddin Barbarossa strengthened Ottoman influence in the Mediterranean",
    "diplomacy": "Diplomacy with France, Venice, the Habsburgs and Safavids mixed trade, alliances, truces and warfare",
    "culture": "Sinan’s architecture, the Süleymaniye complex, poetry, calligraphy, textiles and court arts flourished",
    "family": "Hürrem Sultan became his legal wife; sons Selim, Mustafa, Bayezid and Cihangir shaped succession politics; Mihrimah was influential",
    "legacy": "His reign became a reference point for Ottoman political, legal and artistic achievement, though the empire remained dynamic rather than static"
  },
  {
    "id": "selim-2",
    "born": "1524",
    "died": "1574",
    "epithet": "Selim II",
    "type": "Court-centred ruler of a powerful empire",
    "key": "Conquest of Cyprus (1570–1571); Battle of Lepanto (1571); treaty with Venice (1573)",
    "setting": "The empire inherited vast territories and a mature bureaucracy; Mediterranean rivalry with Spain, Venice and the Habsburgs continued",
    "gov": "Grand vizier Sokollu Mehmed Pasha and experienced officials handled much day-to-day government",
    "military": "Cyprus was conquered, but the fleet suffered a major defeat at Lepanto; the navy was rebuilt rapidly and the empire retained maritime capacity",
    "diplomacy": "A settlement with Venice restored commercial relations after the Cyprus war; diplomacy balanced Mediterranean and eastern concerns",
    "culture": "The Selimiye Mosque at Edirne, designed by Mimar Sinan, became a landmark of imperial architecture",
    "family": "Murad III succeeded him; Nurbanu Sultan became a major figure in the palace household",
    "legacy": "His reign illustrates the importance of grand viziers and institutions in governing a mature empire"
  },
  {
    "id": "murad-3",
    "born": "1546",
    "died": "1595",
    "epithet": "Murad III",
    "type": "Palace-centred monarch and patron",
    "key": "Long Ottoman-Safavid War (1578–1590); conquest of Tabriz and parts of the Caucasus; Mediterranean conflict",
    "setting": "The empire faced costly wars, inflation, factional court politics and growing pressure on the fiscal system",
    "gov": "Palace household influence expanded; the grand vizierate and military command were affected by court factions",
    "military": "The war with Safavids brought temporary gains in the Caucasus and a 1590 treaty, but required heavy expenditure",
    "diplomacy": "Relations with Habsburgs and Safavids involved alternating truces and conflict; trade and diplomacy continued despite rivalry",
    "culture": "Patronised manuscripts, astronomy, poetry and palace arts; court ceremony became elaborate",
    "family": "Mehmed III succeeded him; Safiye Sultan held significant influence in palace politics",
    "legacy": "His reign shows both the cultural splendour and financial strains of the late sixteenth-century empire"
  },
  {
    "id": "mehmed-3",
    "born": "1566",
    "died": "1603",
    "epithet": "Mehmed III",
    "type": "Wartime sultan",
    "key": "Battle of Keresztes/Mezőkeresztes (1596); Long Turkish War; execution of nineteen brothers at accession",
    "setting": "The empire faced the long Habsburg war, fiscal strain, provincial unrest and succession tensions",
    "gov": "The palace and grand vizierate managed a state under wartime pressure; the sultan personally campaigned in Hungary in 1596",
    "military": "His participation in the 1596 campaign produced an Ottoman victory at Keresztes, but the wider war remained costly and unresolved",
    "diplomacy": "Relations with Habsburgs were dominated by the long war; diplomacy with Safavids remained important in the east",
    "culture": "Court patronage continued, though war and fiscal demands shaped public expenditure",
    "family": "Ahmed I succeeded him; his accession was marked by the execution of his brothers, a stark dynastic act",
    "legacy": "His reign is remembered for a rare personal campaign by a late sixteenth-century sultan and the continuation of the Habsburg war"
  },
  {
    "id": "ahmed-1",
    "born": "1590",
    "died": "1617",
    "epithet": "Ahmed I",
    "type": "Young sultan and architectural patron",
    "key": "Peace of Zsitvatorok (1606); Jelali rebellions; construction of Sultan Ahmed Mosque",
    "setting": "The empire faced rebellion in Anatolia, war with the Habsburgs and the Safavid conflict; the old succession practice was changing",
    "gov": "The sultan worked with powerful viziers and palace women; seniority gradually gained importance over fratricidal succession",
    "military": "The Habsburg war ended with the Treaty of Zsitvatorok, which altered diplomatic language and status; eastern warfare continued",
    "diplomacy": "Diplomacy sought to stabilise western borders while dealing with Safavid Persia and internal rebellions",
    "culture": "The Blue Mosque/Sultan Ahmed Mosque became his enduring monument; charitable and religious patronage was significant",
    "family": "Mustafa I and Osman II were among the successors in a period of changing succession practice; Kösem Sultan became influential later",
    "legacy": "His reign marks a turning point in dynastic succession and left one of Istanbul’s defining monuments"
  },
  {
    "id": "mustafa-1",
    "born": "c. 1591",
    "died": "1639",
    "epithet": "Mustafa I",
    "type": "Twice enthroned, twice deposed",
    "key": "First deposition (1618); restoration after Osman II’s murder (1622); final deposition (1623)",
    "setting": "A period of palace factionalism, janissary influence and uncertainty over succession; Mustafa had spent years secluded in the palace",
    "gov": "Government was largely conducted by viziers, palace officials and competing factions; his personal capacity to rule was questioned by contemporaries",
    "military": "His reigns were too brief and politically unstable for sustained campaigns; military and court crises shaped his two accessions",
    "diplomacy": "Foreign policy was secondary to internal power struggles and the need to maintain order",
    "culture": "His periods of confinement and brief reigns limited independent cultural and architectural patronage",
    "family": "He had no lasting succession line; Murad IV followed his second deposition",
    "legacy": "His repeated enthronement demonstrates the emergence of seniority and the political importance of the dynasty’s surviving male members"
  },
  {
    "id": "osman-2",
    "born": "1604",
    "died": "1622",
    "epithet": "Osman the Young",
    "type": "Reform-minded young sultan",
    "key": "Hotin/Khotyn campaign (1621); rebellion and regicide (1622)",
    "setting": "The empire faced the Polish-Lithuanian frontier war, janissary political power and a changing court system",
    "gov": "Attempted to reduce dependence on janissaries and reshape military recruitment; his proposals threatened entrenched interests",
    "military": "Led the 1621 campaign against the Polish-Lithuanian Commonwealth; the conflict ended without decisive victory",
    "diplomacy": "Sought new military resources and reportedly considered pilgrimage and recruitment plans beyond the traditional corps; plans remain debated",
    "culture": "His short reign limited patronage; his murder shocked the capital and dynastic politics",
    "family": "No surviving son succeeded him; Mustafa I was restored after his overthrow",
    "legacy": "His violent death at the hands of soldiers became a warning about the limits of royal reform without institutional support"
  },
  {
    "id": "murad-4",
    "born": "1612",
    "died": "1640",
    "epithet": "Murad IV",
    "type": "Restorer of central authority",
    "key": "Reoccupation of Baghdad (1638); Treaty of Zuhab (1639); campaigns against Safavids",
    "setting": "The sultan came to power as a minor amid rebellions, court factionalism and Safavid-Ottoman warfare",
    "gov": "After regency, he asserted personal rule, disciplined officials and enforced public order through severe punishments",
    "military": "Personally led campaigns, including the reconquest of Baghdad; the 1639 settlement fixed a durable frontier with Safavid Persia",
    "diplomacy": "Negotiations with the Safavids followed military campaigns and produced the Treaty of Zuhab",
    "culture": "Courtly arts and literature continued, while restrictions on coffeehouses, tobacco and alcohol became associated with his rule",
    "family": "Ibrahim succeeded him; Kösem Sultan had been influential during Murad’s minority",
    "legacy": "He restored central authority and secured an important eastern settlement, but his methods were harsh and coercive"
  },
  {
    "id": "ibrahim",
    "born": "1615",
    "died": "1648",
    "epithet": "Ibrahim I",
    "type": "Contested and unstable monarch",
    "key": "Cretan War began (1645); deposition and execution (1648)",
    "setting": "The empire faced the expensive Cretan campaign, court factionalism and the continuing influence of palace households",
    "gov": "Powerful officials and palace networks dominated decision-making; fiscal pressures and appointments fuelled opposition",
    "military": "The conquest of Crete began under his reign, initiating a war that lasted for decades",
    "diplomacy": "Relations with Venice deteriorated over Crete; diplomacy could not prevent the long conflict",
    "culture": "Palace expenditure and patronage became controversial in contemporary accounts; later narratives sometimes exaggerate personal extravagance",
    "family": "Mehmed IV succeeded him; Kösem Sultan and Turhan Sultan were central figures in the succession crisis",
    "legacy": "His deposition and execution exposed the power of military and palace coalitions in seventeenth-century politics"
  },
  {
    "id": "mehmed-4",
    "born": "1642",
    "died": "1693",
    "epithet": "Mehmed IV",
    "type": "The Hunter; long-reigning sultan",
    "key": "Köprülü reforms; conquest of Crete (1669); failed siege of Vienna (1683); deposition (1687)",
    "setting": "The empire experienced a recovery under Köprülü grand viziers before renewed war with the Habsburgs and the Holy League",
    "gov": "Grand viziers Mehmed and Fazıl Ahmed Köprülü restored discipline and state finances; the sultan often resided at Edirne",
    "military": "Crete was conquered after a long siege; the 1683 Vienna campaign failed and triggered major territorial reversals",
    "diplomacy": "Diplomacy with France and European powers coexisted with wars against Venice, Austria, Poland and Russia",
    "culture": "Court hunting, gardens, architecture and the Edirne court shaped his personal image; public institutions remained active",
    "family": "Suleiman II succeeded him after military defeats and a palace-military crisis",
    "legacy": "His reign demonstrates both the effectiveness of strong viziers and the dangers of overambitious campaigns"
  },
  {
    "id": "suleiman-2",
    "born": "1642",
    "died": "1691",
    "epithet": "Suleiman II",
    "type": "Late-life ruler during the Holy League war",
    "key": "Battle of Slankamen (1691); campaigns against the Holy League",
    "setting": "The empire was retreating after the failed Vienna campaign and faced a coalition of Austria, Poland, Venice and Russia",
    "gov": "The Köprülü family and other experienced officials directed much of the war effort and fiscal recovery",
    "military": "The war continued on several fronts; the defeat at Slankamen came in the year of his death",
    "diplomacy": "Diplomacy sought to limit the coalition’s gains, but the war remained active",
    "culture": "His short reign offered limited time for large cultural projects; religious patronage and court ceremony continued",
    "family": "Ahmed II succeeded him; he had spent decades in palace seclusion before accession",
    "legacy": "His reign belongs to a critical defensive phase in which the empire sought to recover from the crisis of 1683"
  },
  {
    "id": "ahmed-2",
    "born": "1643",
    "died": "1695",
    "epithet": "Ahmed II",
    "type": "Wartime sultan",
    "key": "Battle of Slankamen (1691); loss of Belgrade (1690) and continuing Holy League conflict",
    "setting": "The empire struggled to contain the Habsburg advance after the loss of much of Hungary",
    "gov": "Experienced grand viziers and military commanders managed policy during a short reign",
    "military": "The army suffered reverses, including the loss of Belgrade and defeat at Slankamen; the front remained unstable",
    "diplomacy": "Negotiations were difficult while the Holy League maintained pressure across central Europe",
    "culture": "Court patronage continued but was overshadowed by war and fiscal demands",
    "family": "Mustafa II succeeded him; Ahmed’s sons did not establish a lasting succession line",
    "legacy": "His reign reflects the defensive pressures that preceded the Treaty of Karlowitz"
  },
  {
    "id": "mustafa-2",
    "born": "1664",
    "died": "1703",
    "epithet": "Mustafa II",
    "type": "Campaigning sultan and reform-era figure",
    "key": "Campaigns in Hungary; Zenta (1697); Treaty of Karlowitz (1699); Edirne Incident (1703)",
    "setting": "The empire faced the Holy League and the loss of Hungary; military setbacks forced a new diplomatic settlement",
    "gov": "He initially campaigned personally, while later government relied on grand viziers and fiscal reorganisation",
    "military": "Defeat at Zenta was decisive; Karlowitz ceded major territories and marked a strategic turning point",
    "diplomacy": "The treaty with Austria, Poland and Venice formalised territorial losses; diplomacy with Russia remained tense",
    "culture": "He supported court and religious institutions but the reign was dominated by military crisis",
    "family": "Ahmed III succeeded him after the Edirne Incident; the dynasty’s legitimacy was challenged by military discontent",
    "legacy": "Karlowitz marks a major transition in Ottoman diplomacy and European balance of power"
  },
  {
    "id": "ahmed-3",
    "born": "1673",
    "died": "1736",
    "epithet": "Ahmed III",
    "type": "Patron of the Tulip Era",
    "key": "Treaty of Passarowitz (1718); Treaty of Belgrade (1739, after his reign); Patrona Halil revolt (1730); Tulip Era",
    "setting": "After Karlowitz, the empire sought recovery amid rising Russian and Austrian power and internal pressure for reform",
    "gov": "Grand vizier Nevşehirli Damat Ibrahim Pasha led a period of diplomacy, fiscal experiments and urban patronage",
    "military": "The Pruth campaign (1711) forced Russia to return Azov; Morea was retaken from Venice; losses to Austria followed at Passarowitz",
    "diplomacy": "Peace with Austria after 1718 enabled cultural exchange; envoys and translations increased knowledge of Europe",
    "culture": "Tulip cultivation, printing, libraries, fountains, gardens and palace architecture became emblematic of the era",
    "family": "Mahmud I succeeded him after the 1730 uprising; his daughters were involved in dynastic alliances",
    "legacy": "His reign is associated with cultural innovation and the first Ottoman Turkish printing press, but also social tensions"
  },
  {
    "id": "mahmud-1",
    "born": "1696",
    "died": "1754",
    "epithet": "Mahmud I",
    "type": "Restorer after the 1730 uprising",
    "key": "War of 1736–1739; Treaty of Belgrade (1739); Nader Shah’s campaigns in the east",
    "setting": "The state recovered from the Patrona Halil revolt and faced renewed wars with Austria, Russia and Persia",
    "gov": "He restored court authority and relied on capable grand viziers; fiscal and military adjustments continued",
    "military": "The Treaty of Belgrade returned Belgrade and parts of Serbia to Ottoman control; eastern warfare remained difficult",
    "diplomacy": "Diplomacy with Austria and Russia helped secure the 1739 settlement; Persian relations were shaped by Nader Shah",
    "culture": "Mosques, libraries, fountains and charitable foundations were commissioned; music and court culture continued",
    "family": "Osman III succeeded him; he left no surviving son to inherit",
    "legacy": "His reign achieved a significant diplomatic recovery after the losses of the early eighteenth century"
  },
  {
    "id": "osman-3",
    "born": "1699",
    "died": "1757",
    "epithet": "Osman III",
    "type": "Short-reigning palace sultan",
    "key": "Accession after Mahmud I; court and palace reforms; reign ended in 1757",
    "setting": "A relatively stable interval followed the 1739 peace, though the empire faced long-term military and fiscal challenges",
    "gov": "He attempted to regulate palace access and court conduct; the short reign limited structural change",
    "military": "No major conquest defined his reign; military priorities were defensive and administrative",
    "diplomacy": "Relations with Austria and Russia remained shaped by the 1739 settlement and regional balance",
    "culture": "He supported religious and charitable works; his reign is noted more for palace life than major cultural transformation",
    "family": "Mustafa III succeeded him; details of his household are less prominent in the historical record",
    "legacy": "His brief reign illustrates the limited room for major change during short periods of rule"
  },
  {
    "id": "mustafa-3",
    "born": "1717",
    "died": "1774",
    "epithet": "Mustafa III",
    "type": "Reform-minded ruler in a difficult era",
    "key": "Russo-Turkish War (1768–1774); engineering and artillery reforms; loss of Crimea’s Ottoman suzerainty after Küçük Kaynarca",
    "setting": "Russia’s expansion and the Polish crisis destabilised the Black Sea region; the empire’s military weaknesses became more visible",
    "gov": "He supported technical and military reform, including artillery, engineering education and attempts to improve state capacity",
    "military": "The war with Russia ended disastrously after his death; Ottoman forces suffered defeats and the treaty was signed by his successor",
    "diplomacy": "Relations with Russia deteriorated; diplomacy with European powers could not prevent war",
    "culture": "Supported libraries, mosques, schools and technical education; engineering institutions expanded",
    "family": "Abdulhamid I succeeded him; dynastic succession continued through the senior male line",
    "legacy": "His reign helped prepare the ground for more ambitious late eighteenth-century reforms, despite military defeat"
  },
  {
    "id": "abdulhamid-1",
    "born": "1725",
    "died": "1789",
    "epithet": "Abdulhamid I",
    "type": "Reforming sultan after Küçük Kaynarca",
    "key": "Treaty of Küçük Kaynarca (1774); engineering school expansion; war with Russia (1787–1792 began under him)",
    "setting": "The empire faced the consequences of losing Crimea’s political control and growing Russian influence in the Black Sea",
    "gov": "He supported military reorganisation, engineering education and recruitment of European technical advisers, while managing competing court factions",
    "military": "Fortifications and artillery units were improved; renewed war with Russia and Austria began late in his reign",
    "diplomacy": "Diplomacy sought to contain Russian expansion and rebuild alliances; the treaty of 1774 reshaped the Black Sea balance",
    "culture": "He was known for religious charity, mosque patronage and support for public works",
    "family": "Selim III succeeded him; his sons Mustafa IV and Mahmud II later ruled",
    "legacy": "He was an important bridge between eighteenth-century reform initiatives and the more systematic programmes of Selim III and Mahmud II"
  },
  {
    "id": "selim-3",
    "born": "1761",
    "died": "1808",
    "epithet": "Selim III",
    "type": "Reforming sultan and patron of the Nizam-i Cedid",
    "key": "Nizam-i Cedid reforms; permanent embassies; French invasion of Egypt (1798); deposition (1807) and murder (1808)",
    "setting": "The French Revolution, Russian expansion and Napoleon’s invasion of Egypt exposed the need for military and diplomatic adaptation",
    "gov": "Created new ministries and reform councils, sought new revenue and established permanent embassies in European capitals",
    "military": "Founded the Nizam-i Cedid army, military schools and naval engineering initiatives; reforms provoked janissary and conservative opposition",
    "diplomacy": "Embassies in London, Paris, Vienna and Berlin widened diplomatic knowledge; Britain helped expel French forces from Egypt",
    "culture": "A poet and composer, he patronised music and court arts while encouraging technical education",
    "family": "Mustafa IV replaced him; Mahmud II later continued parts of his reform agenda",
    "legacy": "His programme became a foundation for nineteenth-century Ottoman modernisation, although he was overthrown before it could mature"
  },
  {
    "id": "mustafa-4",
    "born": "1779",
    "died": "1808",
    "epithet": "Mustafa IV",
    "type": "Short-reigning ruler amid counter-revolution",
    "key": "Kabakçı Mustafa revolt (1807); Alemdar Mustafa Pasha’s march on Istanbul (1808); death during palace crisis",
    "setting": "The empire was divided between reformers and opponents of Selim III’s Nizam-i Cedid",
    "gov": "His authority depended on anti-reform military factions; attempts to eliminate rival dynastic claimants intensified instability",
    "military": "No major campaign defined his brief reign; the army and capital’s political crisis dominated events",
    "diplomacy": "Diplomacy was secondary to internal crisis and the struggle over the reform programme",
    "culture": "The brief reign left little opportunity for major patronage; palace politics dominated cultural life",
    "family": "Mahmud II replaced him; Mustafa was killed during the 1808 succession crisis",
    "legacy": "His reign shows how military corps and urban factions could determine the fate of the throne"
  },
  {
    "id": "mahmud-2",
    "born": "1785",
    "died": "1839",
    "epithet": "Mahmud II",
    "type": "The great reforming sultan",
    "key": "Auspicious Incident and abolition of Janissaries (1826); Greek War of Independence; Egyptian crisis; Tanzimat preparations",
    "setting": "The empire faced provincial autonomy, Greek independence, Russian pressure and the challenge posed by Muhammad Ali of Egypt",
    "gov": "Centralised administration, created ministries, reorganised provincial government, introduced new uniforms, schools and official publications",
    "military": "Destroyed the Janissary corps in 1826 and built a new army; nevertheless suffered defeats and territorial crises in Greece and against Egypt",
    "diplomacy": "Opened permanent diplomatic channels with European powers and sought support during the Egyptian crisis",
    "culture": "Founded medical and military schools, supported printing and public infrastructure; visual symbols of state modernisation changed",
    "family": "Abdulmejid I succeeded him; his sons and daughters connected the dynasty to reform-era elites",
    "legacy": "His reforms transformed the state apparatus and prepared the institutional framework for the Tanzimat"
  },
  {
    "id": "abdulmejid-1",
    "born": "1823",
    "died": "1861",
    "epithet": "Abdulmejid I",
    "type": "Tanzimat-era reforming monarch",
    "key": "Gülhane Edict (1839); Reform Edict (1856); Crimean War (1853–1856); Imperial Ottoman Bank (1856)",
    "setting": "The empire sought to preserve its territories through administrative reform and diplomatic cooperation with European powers",
    "gov": "Tanzimat reforms reorganised taxation, law, conscription, provincial administration and the status of non-Muslim subjects",
    "military": "The Crimean War allied the Ottomans with Britain and France against Russia; military success came with heavy debt and dependence",
    "diplomacy": "The Paris Treaty (1856) recognised the empire within the European diplomatic order, while foreign loans increased",
    "culture": "New schools, hospitals, barracks and public buildings reflected changing imperial styles; Dolmabahçe Palace symbolised the new court",
    "family": "Abdulaziz succeeded him; his household connected the dynasty to Tanzimat political circles",
    "legacy": "His reign formalised a major reform era and reshaped the legal relationship between state and subjects"
  },
  {
    "id": "abdulaziz",
    "born": "1830",
    "died": "1876",
    "epithet": "Abdulaziz",
    "type": "Reform-era sultan and modernising patron",
    "key": "European tour (1867); railway and naval expansion; deposition (1876); death soon after removal",
    "setting": "The empire faced Balkan nationalism, financial dependence, Russian pressure and constitutional debate",
    "gov": "Supported administrative, educational and infrastructural reform, while court spending and financial borrowing increased",
    "military": "Expanded the navy and railways, but the empire faced defeats and instability in the Balkans; the 1875 financial crisis weakened the state",
    "diplomacy": "Cultivated relations with France and Britain, yet diplomatic isolation and the Eastern Question constrained policy",
    "culture": "Patronised architecture and arts; Çırağan Palace and major public works represented imperial ambition",
    "family": "Murad V succeeded him; his deposition and death remain debated in historical accounts",
    "legacy": "His reign combined modernising projects with severe fiscal stress and political crisis"
  },
  {
    "id": "murad-5",
    "born": "1840",
    "died": "1904",
    "epithet": "Murad V",
    "type": "Short-reigning constitutional-era sultan",
    "key": "Accession during the 1876 crisis; reign of only 93 days; deposition and long confinement",
    "setting": "Constitutional reformers, palace officials and military leaders were divided over the future of the state",
    "gov": "His reign was too brief to establish a governing programme; his health and political reliability were contested",
    "military": "No major military campaign was conducted under his brief rule; the empire faced the wider crisis of the Balkans and Russia",
    "diplomacy": "Diplomacy was dominated by the constitutional crisis and the approach of war with Russia",
    "culture": "Known for musical and literary interests; confinement at Çırağan Palace limited public patronage",
    "family": "Abdulhamid II succeeded him; Murad lived under supervision until 1904",
    "legacy": "His brief reign is a key episode in the constitutional crisis of 1876 and the contested politics of succession"
  },
  {
    "id": "abdulhamid-2",
    "born": "1842",
    "died": "1918",
    "epithet": "Abdulhamid II",
    "type": "Long-reigning centraliser and moderniser",
    "key": "Constitution of 1876 and suspension of parliament (1878); Russo-Turkish War; Hijaz Railway; Young Turk Revolution (1908); deposition (1909)",
    "setting": "The empire faced the 1877–78 war, European intervention, nationalist movements, financial constraints and the challenge of governing a diverse population",
    "gov": "Centralised rule around the palace, expanded intelligence and censorship, but also developed schools, bureaucracy, communications and infrastructure",
    "military": "Lost major territories after the Russo-Turkish War; later faced Armenian, Macedonian and Balkan crises; military modernisation continued",
    "diplomacy": "Used pan-Islamic diplomacy, relations with Germany and careful balancing among European powers",
    "culture": "Expanded education, telegraph networks and the Hijaz Railway; patronised photography, architecture and technical institutions",
    "family": "Mehmed V succeeded him; palace household and dynastic family were important in political symbolism",
    "legacy": "His legacy is contested: authoritarian surveillance coexisted with substantial institutional and infrastructural modernisation"
  },
  {
    "id": "mehmed-5",
    "born": "1844",
    "died": "1918",
    "epithet": "Mehmed V Reşad",
    "type": "Constitutional-era and wartime sultan",
    "key": "Second Constitutional Era; Italo-Turkish War (1911–1912); Balkan Wars; First World War and Gallipoli",
    "setting": "The Committee of Union and Progress dominated government while the empire lost Libya and most European territories",
    "gov": "The sultan’s constitutional role was largely ceremonial; ministers and the CUP directed policy",
    "military": "The empire fought in the Balkan Wars and entered World War I in 1914; Gallipoli became a major defensive victory",
    "diplomacy": "Alliance with Germany shaped wartime diplomacy; relations with Britain, France and Russia became hostile",
    "culture": "Public ceremonies, religious symbolism and wartime mobilisation shaped the sultan’s role; the capital faced shortages",
    "family": "Mehmed VI succeeded him; his sons did not inherit the throne",
    "legacy": "His reign witnessed the final global war of the empire and the rapid loss of most remaining territories"
  },
  {
    "id": "mehmed-6",
    "born": "1861",
    "died": "1926",
    "epithet": "Mehmed VI Vahideddin",
    "type": "Last Ottoman sultan",
    "key": "Armistice of Mudros (1918); occupation of Istanbul; abolition of the sultanate (1922); exile",
    "setting": "The empire was defeated in World War I, occupied by Allied forces and challenged by the nationalist movement based in Ankara",
    "gov": "The palace attempted to preserve the dynasty through diplomacy and cooperation with occupying powers; the Ankara government claimed national sovereignty",
    "military": "The Turkish War of Independence was fought by nationalist forces; the sultan’s government lacked independent military capacity",
    "diplomacy": "The Treaty of Sèvres (1920) attempted to partition the empire; the Treaty of Lausanne (1923) replaced it after the nationalist victory",
    "culture": "The final court retained ceremonial traditions while the political order disintegrated; exile ended the imperial court in Istanbul",
    "family": "Abdulmejid II became caliph after the sultanate’s abolition; Mehmed VI died in exile in San Remo",
    "legacy": "His departure and the abolition of the sultanate in 1922 ended more than six centuries of Ottoman dynastic rule"
  }
];
const OTTOMAN_DEEP_TITLES = [
  {
    "en": "Historical setting and the world around the throne",
    "ur": "تاریخی پس منظر اور تخت کے گرد بدلتی دنیا"
  },
  {
    "en": "Birth, lineage and childhood",
    "ur": "پیدائش، نسب اور بچپن"
  },
  {
    "en": "Education, character and preparation",
    "ur": "تعلیم، شخصیت اور حکمرانی کی تیاری"
  },
  {
    "en": "Accession, legitimacy and first decisions",
    "ur": "تخت نشینی، جوازِ اقتدار اور ابتدائی فیصلے"
  },
  {
    "en": "The imperial court and governing institutions",
    "ur": "شاہی دربار اور حکومتی ادارے"
  },
  {
    "en": "Grand viziers, ministers and political factions",
    "ur": "وزرائے اعظم، وزرا اور سیاسی گروہ"
  },
  {
    "en": "Army, navy and military organisation",
    "ur": "بری فوج، بحریہ اور فوجی تنظیم"
  },
  {
    "en": "Major campaigns, battles and territorial change",
    "ur": "اہم مہمات، جنگیں اور علاقائی تبدیلی"
  },
  {
    "en": "Foreign policy, treaties and diplomacy",
    "ur": "خارجہ پالیسی، معاہدے اور سفارت کاری"
  },
  {
    "en": "Provincial government and local society",
    "ur": "صوبائی حکومت اور مقامی معاشرہ"
  },
  {
    "en": "Taxation, trade and the imperial economy",
    "ur": "محصولات، تجارت اور سلطنت کی معیشت"
  },
  {
    "en": "Law, justice and public administration",
    "ur": "قانون، انصاف اور عوامی انتظام"
  },
  {
    "en": "Religion, scholarship and intellectual life",
    "ur": "مذہب، علم اور فکری زندگی"
  },
  {
    "en": "Architecture, art and public works",
    "ur": "فنِ تعمیر، فنون اور عوامی تعمیرات"
  },
  {
    "en": "The royal household, consorts and children",
    "ur": "شاہی خاندان، ازواج اور اولاد"
  },
  {
    "en": "Crises, opposition and the limits of power",
    "ur": "بحران، مخالفت اور اقتدار کی حدود"
  },
  {
    "en": "Final years, death and succession",
    "ur": "آخری ایام، وفات اور جانشینی"
  },
  {
    "en": "Historical debate, long-term legacy and sources",
    "ur": "تاریخی مباحث، دیرپا میراث اور مآخذ"
  }
];
const OTTOMAN_DEEP_ROSTER = [
  {
    "id": "osman-1",
    "n": 1,
    "en": "Osman I",
    "ur": "عثمان اول",
    "reign": "c. 1299–1326"
  },
  {
    "id": "orhan",
    "n": 2,
    "en": "Orhan",
    "ur": "اورخان",
    "reign": "1326–1362"
  },
  {
    "id": "murad-1",
    "n": 3,
    "en": "Murad I",
    "ur": "مراد اول",
    "reign": "1362–1389"
  },
  {
    "id": "bayezid-1",
    "n": 4,
    "en": "Bayezid I",
    "ur": "بایزید اول",
    "reign": "1389–1402"
  },
  {
    "id": "mehmed-1",
    "n": 5,
    "en": "Mehmed I",
    "ur": "محمد اول",
    "reign": "1413–1421"
  },
  {
    "id": "murad-2",
    "n": 6,
    "en": "Murad II",
    "ur": "مراد ثانی",
    "reign": "1421–1444, 1446–1451"
  },
  {
    "id": "mehmed-2",
    "n": 7,
    "en": "Mehmed II",
    "ur": "محمد ثانی",
    "reign": "1444–1446, 1451–1481"
  },
  {
    "id": "bayezid-2",
    "n": 8,
    "en": "Bayezid II",
    "ur": "بایزید ثانی",
    "reign": "1481–1512"
  },
  {
    "id": "selim-1",
    "n": 9,
    "en": "Selim I",
    "ur": "سلیم اول",
    "reign": "1512–1520"
  },
  {
    "id": "suleiman-1",
    "n": 10,
    "en": "Suleiman I",
    "ur": "سلیمان اول",
    "reign": "1520–1566"
  },
  {
    "id": "selim-2",
    "n": 11,
    "en": "Selim II",
    "ur": "سلیم ثانی",
    "reign": "1566–1574"
  },
  {
    "id": "murad-3",
    "n": 12,
    "en": "Murad III",
    "ur": "مراد ثالث",
    "reign": "1574–1595"
  },
  {
    "id": "mehmed-3",
    "n": 13,
    "en": "Mehmed III",
    "ur": "محمد ثالث",
    "reign": "1595–1603"
  },
  {
    "id": "ahmed-1",
    "n": 14,
    "en": "Ahmed I",
    "ur": "احمد اول",
    "reign": "1603–1617"
  },
  {
    "id": "mustafa-1",
    "n": 15,
    "en": "Mustafa I",
    "ur": "مصطفیٰ اول",
    "reign": "1617–1618, 1622–1623"
  },
  {
    "id": "osman-2",
    "n": 16,
    "en": "Osman II",
    "ur": "عثمان ثانی",
    "reign": "1618–1622"
  },
  {
    "id": "murad-4",
    "n": 17,
    "en": "Murad IV",
    "ur": "مراد رابع",
    "reign": "1623–1640"
  },
  {
    "id": "ibrahim",
    "n": 18,
    "en": "Ibrahim",
    "ur": "ابراہیم",
    "reign": "1640–1648"
  },
  {
    "id": "mehmed-4",
    "n": 19,
    "en": "Mehmed IV",
    "ur": "محمد رابع",
    "reign": "1648–1687"
  },
  {
    "id": "suleiman-2",
    "n": 20,
    "en": "Suleiman II",
    "ur": "سلیمان ثانی",
    "reign": "1687–1691"
  },
  {
    "id": "ahmed-2",
    "n": 21,
    "en": "Ahmed II",
    "ur": "احمد ثانی",
    "reign": "1691–1695"
  },
  {
    "id": "mustafa-2",
    "n": 22,
    "en": "Mustafa II",
    "ur": "مصطفیٰ ثانی",
    "reign": "1695–1703"
  },
  {
    "id": "ahmed-3",
    "n": 23,
    "en": "Ahmed III",
    "ur": "احمد ثالث",
    "reign": "1703–1730"
  },
  {
    "id": "mahmud-1",
    "n": 24,
    "en": "Mahmud I",
    "ur": "محمود اول",
    "reign": "1730–1754"
  },
  {
    "id": "osman-3",
    "n": 25,
    "en": "Osman III",
    "ur": "عثمان ثالث",
    "reign": "1754–1757"
  },
  {
    "id": "mustafa-3",
    "n": 26,
    "en": "Mustafa III",
    "ur": "مصطفیٰ ثالث",
    "reign": "1757–1774"
  },
  {
    "id": "abdulhamid-1",
    "n": 27,
    "en": "Abdulhamid I",
    "ur": "عبدالحمید اول",
    "reign": "1774–1789"
  },
  {
    "id": "selim-3",
    "n": 28,
    "en": "Selim III",
    "ur": "سلیم ثالث",
    "reign": "1789–1807"
  },
  {
    "id": "mustafa-4",
    "n": 29,
    "en": "Mustafa IV",
    "ur": "مصطفیٰ رابع",
    "reign": "1807–1808"
  },
  {
    "id": "mahmud-2",
    "n": 30,
    "en": "Mahmud II",
    "ur": "محمود ثانی",
    "reign": "1808–1839"
  },
  {
    "id": "abdulmejid-1",
    "n": 31,
    "en": "Abdulmejid I",
    "ur": "عبدالمجید اول",
    "reign": "1839–1861"
  },
  {
    "id": "abdulaziz",
    "n": 32,
    "en": "Abdulaziz",
    "ur": "عبدالعزیز",
    "reign": "1861–1876"
  },
  {
    "id": "murad-5",
    "n": 33,
    "en": "Murad V",
    "ur": "مراد خامس",
    "reign": "1876"
  },
  {
    "id": "abdulhamid-2",
    "n": 34,
    "en": "Abdulhamid II",
    "ur": "عبدالحمید ثانی",
    "reign": "1876–1909"
  },
  {
    "id": "mehmed-5",
    "n": 35,
    "en": "Mehmed V",
    "ur": "محمد خامس",
    "reign": "1909–1918"
  },
  {
    "id": "mehmed-6",
    "n": 36,
    "en": "Mehmed VI",
    "ur": "محمد ششم",
    "reign": "1918–1922"
  }
];
function ottomanPageText(profile, pageIndex, rulerName) {
  const p = profile;
  const en = [
    `The political setting of ${rulerName}'s reign was defined by ${p.setting}. This mattered because the Ottoman ruler was not acting in isolation: provincial elites, military corps, religious scholars, rival dynasties, merchants and foreign governments all influenced what the central government could achieve. The same institution could operate differently in Anatolia, the Balkans, the Arab provinces and the imperial capital.`,
    `${rulerName}'s birth is conventionally dated to ${p.born}. The surviving record for Ottoman princes varies considerably by century. Early dynastic genealogies were often written down generations later, while later palace records preserve more precise information. Where a mother's identity, birthplace or childhood anecdote is disputed, it should be treated as a tradition rather than a proven fact.`,
    `A prince's preparation could include Qur'anic and religious learning, languages, literature, calligraphy, military skills, court etiquette and practical experience in provincial government. The system changed over time: early princes learned in a frontier political culture, while later princes were educated within a highly organised palace household. For ${rulerName}, the most important context is the expectation that a ruler should command armies, protect the dynasty, uphold justice and maintain the empire's institutions.`,
    `The accession of ${rulerName} took place during ${p.setting}. A new sultan needed recognition from the household, senior officials, the army and the religious establishment. The first decisions usually concerned appointments, the treasury, public order, the security of the dynasty and whether to continue or reverse the previous ruler's policies. Legitimacy was expressed through ceremony, the Friday prayer, coinage, public proclamations and the appointment of trusted officeholders.`,
    `The imperial government rested on a network of offices rather than on the ruler's personal decisions alone. The grand vizier, Imperial Council, treasury, chancery, judges, provincial governors and military commanders all carried out specialised work. During ${rulerName}'s reign, the central question was how to coordinate these institutions while responding to ${p.gov}. Access to the ruler and the ability to secure appointments could become as important as formal rank.`,
    `The grand vizier and senior ministers were essential to the daily operation of the state. The political balance during this reign was shaped by ${p.gov}. A capable minister could organise taxation, supply armies, negotiate treaties and restore discipline; a weak or unpopular appointment could intensify court factionalism. The sultan's relationship with officials therefore reveals how power was actually exercised, not simply how it was described in ceremonial language.`,
    `Military power depended on recruitment, training, pay, supply, fortifications, artillery, cavalry, infantry and, where relevant, naval forces. The central military developments associated with this reign included ${p.military}. These forces were expensive to maintain. Delays in pay, debasement of coinage, shortages of provisions or competition for commands could turn military institutions into political actors capable of challenging the palace.`,
    `The defining campaigns and territorial developments of this reign included ${p.key}. Military outcomes were never determined by battlefield courage alone: geography, seasonal weather, intelligence, siege technology, supply routes, diplomacy and the ability to replace losses all mattered. A victory could strengthen the dynasty, but an extended campaign could also exhaust the treasury and leave other frontiers exposed.`,
    `The foreign policy of this period was shaped by ${p.diplomacy}. Ottoman diplomacy used ambassadors, envoys, treaties, commercial privileges, tribute arrangements, dynastic marriages and temporary alliances. Religious difference did not prevent negotiation, just as shared religion did not guarantee peace. A treaty should be understood in its strategic setting: it could secure a frontier, buy time for reform or recognise a balance of power that neither side could immediately change.`,
    `The empire was a collection of provinces with different languages, legal customs, economies and social structures. Governors, judges, tax-farmers, local notables and religious communities mediated between Istanbul and ordinary inhabitants. During this reign, the central state's ability to govern depended on ${p.gov}. Provincial autonomy could be useful when local leaders maintained order and supplied revenue, but dangerous when their interests diverged from the dynasty.`,
    `The imperial economy depended on agriculture, land revenue, customs duties, urban crafts, caravan routes, ports and interregional trade. Armies and the palace required reliable income, while subjects expected predictable taxation and access to markets. The reign's economic pressures were closely connected to ${p.key}. Inflation, harvest failures, war expenditure and currency changes could affect soldiers, artisans, merchants and rural households in very different ways.`,
    `Ottoman justice combined dynastic regulations (kanun) with Islamic jurisprudence and the work of appointed judges. The ruler was expected to protect subjects, prevent abuses by officials and maintain a just balance between taxation and public order. In this reign, administration was shaped by ${p.gov}. The practical application of law depended on records, courts, local officials and the ability of complainants to make grievances heard.`,
    `Religious and intellectual life was diverse. Muslim scholars, Sufi orders, Christian churches, Jewish communities, poets, historians, physicians and teachers all formed part of the imperial landscape. The cultural and scholarly character of this reign included ${p.culture}. Religious patronage could express piety and political legitimacy, while schools, libraries and charitable foundations also provided education, food, healthcare and urban services.`,
    `Architecture and public works made imperial authority visible. Mosques, madrasas, bridges, markets, hospitals, fountains, fortresses, palaces and roads served practical purposes as well as symbolic ones. The most characteristic cultural developments of this reign included ${p.culture}. Buildings should be read as part of wider networks of endowment and maintenance: a complex could support teachers, students, travellers, the poor and the daily life of a city.`,
    `The dynasty's household was both a family and a political institution. The available historical picture of ${rulerName}'s household is summarised cautiously: ${p.family}. Mothers of sultans, consorts, princes, princesses, tutors and palace officials could influence appointments, alliances and succession. Yet popular stories often exaggerate private details; names, numbers of children and alleged intrigues should be checked against the quality and date of the evidence.`,
    `The principal pressures and limits of this reign included ${p.setting} and ${p.gov}. Even a powerful sultan depended on revenue, reliable information, military loyalty and cooperation from officials. Opposition could come from janissaries, provincial governors, religious authorities, palace factions, taxpayers or foreign powers. Understanding these constraints prevents a simplistic picture in which every success or failure is attributed to one ruler alone.`,
    `The reign ended with the circumstances recorded as ${p.died}. The transition to the next ruler could involve a peaceful succession, a palace settlement, military intervention, deposition or civil conflict. Funeral ceremonies and burial monuments helped preserve dynastic memory, while the new sultan's first actions signalled continuity or change. The succession after ${rulerName} must therefore be understood as part of the political history of the dynasty, not merely as a family event.`,
    `${rulerName} is remembered in connection with ${p.legacy}. Historians assess the reign through multiple kinds of evidence: chronicles, archival registers, diplomatic reports, inscriptions, coins, buildings and later memories. The strongest account distinguishes contemporary evidence from later legend, recognises regional experiences and weighs achievements against costs. The Ottoman Empire did not simply rise and fall in a straight line; it repeatedly adapted its institutions to changing military, economic and diplomatic conditions.`
  ][pageIndex];
  const ur = [
    `${rulerName} کے دور کا سیاسی پس منظر ${p.setting} سے متعین ہوتا تھا۔ عثمانی سلطان تنہا فیصلے نہیں کرتا تھا؛ صوبائی بااثر افراد، فوجی دستے، علما، حریف خاندان، تاجر اور غیر ملکی حکومتیں بھی مرکزی حکومت کی صلاحیت پر اثر انداز ہوتی تھیں۔ اناطولیہ، بلقان، عرب صوبوں اور دارالحکومت میں ایک ہی ادارہ مختلف انداز سے کام کر سکتا تھا۔`,
    `${rulerName} کی پیدائش عموماً ${p.born} میں بیان کی جاتی ہے۔ عثمانی شہزادوں کے بارے میں محفوظ تاریخی معلومات ہر صدی میں یکساں نہیں۔ ابتدائی خاندانی نسب نامے کئی نسلوں بعد تحریر ہوئے، جبکہ بعد کے ادوار میں محل کے ریکارڈ زیادہ واضح ہیں۔ والدہ، جائے پیدائش یا بچپن کے کسی واقعے کے بارے میں اختلاف ہو تو اسے ثابت شدہ حقیقت کے بجائے روایت سمجھنا چاہیے۔`,
    `شہزادے کی تربیت میں قرآن و دینی علوم، زبانیں، ادب، خطاطی، عسکری مہارت، درباری آداب اور بعض ادوار میں صوبائی حکومت کا عملی تجربہ شامل ہو سکتا تھا۔ وقت کے ساتھ یہ نظام بدلتا رہا؛ ابتدائی شہزادے سرحدی سیاسی ماحول میں سیکھتے تھے جبکہ بعد کے شہزادے منظم شاہی محل میں پرورش پاتے تھے۔ ${rulerName} کے لیے بنیادی توقع یہ تھی کہ سلطان فوج کی قیادت کرے، خاندان کی حفاظت کرے، انصاف قائم رکھے اور ریاستی اداروں کو چلائے۔`,
    `${rulerName} کی تخت نشینی ${p.setting} کے حالات میں ہوئی۔ نئے سلطان کو شاہی گھرانے، اعلیٰ اہلکاروں، فوج اور مذہبی اداروں کی حمایت درکار ہوتی تھی۔ ابتدائی فیصلوں میں عہدوں کی تقرری، خزانہ، امن و امان، خاندان کی سلامتی اور سابق سلطان کی پالیسیوں کو جاری رکھنے یا بدلنے جیسے امور شامل ہوتے تھے۔ رسمی تقریبات، خطبہ، سکے، اعلانات اور قابلِ اعتماد اہلکاروں کی تقرری اقتدار کے جواز کا اظہار کرتے تھے۔`,
    `عثمانی حکومت صرف سلطان کے ذاتی فیصلوں سے نہیں بلکہ مختلف محکموں کے ذریعے چلتی تھی۔ وزیرِ اعظم، دیوانِ ہمایوں، خزانہ، دیوانی دفتر، قاضی، صوبائی گورنر اور فوجی کمانڈر اپنے اپنے فرائض انجام دیتے تھے۔ ${rulerName} کے دور میں بنیادی سوال یہ تھا کہ ان اداروں کو ${p.gov} کے تقاضوں کے ساتھ کس طرح مربوط رکھا جائے۔ سلطان تک رسائی اور تقرریوں پر اثر انداز ہونے کی صلاحیت رسمی عہدے جتنی اہم ہو سکتی تھی۔`,
    `وزیرِ اعظم اور اعلیٰ وزرا ریاست کے روزمرہ انتظام کے لیے نہایت اہم تھے۔ اس دور میں سیاسی توازن پر ${p.gov} کا اثر تھا۔ ایک قابل وزیر محصولات منظم، فوج کو رسد فراہم، معاہدے طے اور نظم و ضبط بحال کر سکتا تھا؛ جبکہ غیر مقبول تقرری درباری گروہ بندی بڑھا سکتی تھی۔ اس لیے وزرا سے سلطان کے تعلقات یہ سمجھنے میں مدد دیتے ہیں کہ طاقت عملاً کیسے استعمال ہوتی تھی۔`,
    `فوجی طاقت کا انحصار بھرتی، تربیت، تنخواہ، رسد، قلعہ بندی، توپ خانے، گھڑسواروں، پیادہ فوج اور ضرورت کے مطابق بحری قوت پر تھا۔ اس دور کی اہم فوجی پیش رفت میں ${p.military} شامل تھے۔ فوج کو برقرار رکھنا مہنگا تھا۔ تنخواہوں میں تاخیر، سکے کی قدر میں کمی، خوراک کی قلت یا کمان کے لیے مقابلہ فوجی اداروں کو سیاسی قوت بنا سکتا تھا۔`,
    `اس دور کی نمایاں فوجی مہمات اور علاقائی تبدیلیوں میں ${p.key} شامل تھے۔ جنگ کا نتیجہ صرف میدانِ جنگ میں بہادری سے طے نہیں ہوتا؛ جغرافیہ، موسم، اطلاعات، محاصرے کی ٹیکنالوجی، رسد، سفارت کاری اور فوجی نقصان پورا کرنے کی صلاحیت بھی اہم ہوتی ہے۔ فتح خاندان کو مضبوط کر سکتی تھی، مگر طویل مہم خزانے کو کمزور اور دوسرے محاذوں کو غیر محفوظ چھوڑ سکتی تھی۔`,
    `اس دور کی خارجہ پالیسی ${p.diplomacy} سے متاثر تھی۔ عثمانی سفارت کاری میں سفیر، ایلچی، معاہدے، تجارتی مراعات، خراج، شاہی شادیاں اور عارضی اتحاد شامل تھے۔ مذہبی اختلاف مذاکرات کی راہ میں لازمی رکاوٹ نہیں تھا، جیسے مشترک مذہب امن کی ضمانت نہیں تھا۔ کسی معاہدے کو اس کے تزویراتی پس منظر میں دیکھنا چاہیے؛ وہ سرحد محفوظ کرنے، اصلاحات کے لیے وقت حاصل کرنے یا طاقت کے توازن کو تسلیم کرنے کا ذریعہ ہو سکتا تھا۔`,
    `سلطنت مختلف زبانوں، قانونی روایات، معیشتوں اور سماجی ڈھانچوں پر مشتمل صوبوں کا مجموعہ تھی۔ گورنر، قاضی، محصول وصول کرنے والے، مقامی عمائدین اور مذہبی برادریاں استنبول اور عام باشندوں کے درمیان رابطہ تھیں۔ اس دور میں مرکزی حکومت کی صلاحیت کا انحصار ${p.gov} پر تھا۔ مقامی خودمختاری اس وقت مفید تھی جب مقامی رہنما امن اور محصولات یقینی بناتے؛ لیکن ان کے مفادات خاندان سے الگ ہوں تو یہی صورت خطرہ بن سکتی تھی۔`,
    `سلطنت کی معیشت زراعت، زمین کے محصولات، کسٹم، شہری دستکاری، قافلوں کے راستوں، بندرگاہوں اور بین الصوبائی تجارت پر قائم تھی۔ فوج اور محل کو مستقل آمدنی درکار تھی، جبکہ رعایا کو قابلِ پیش گوئی ٹیکس اور منڈیوں تک رسائی چاہیے تھی۔ اس دور کے معاشی دباؤ کا تعلق ${p.key} سے تھا۔ مہنگائی، فصلوں کی ناکامی، جنگی اخراجات اور سکے کی تبدیلی سپاہیوں، کاریگروں، تاجروں اور کسانوں کو مختلف انداز سے متاثر کر سکتی تھی۔`,
    `عثمانی نظامِ انصاف میں شاہی قوانین (قانون) اسلامی فقہ اور مقرر کردہ قاضیوں کے کام کے ساتھ موجود تھے۔ سلطان سے توقع تھی کہ وہ رعایا کی حفاظت کرے، اہلکاروں کی زیادتی روکے اور محصولات و امن و امان میں توازن قائم رکھے۔ اس دور کے انتظام پر ${p.gov} کا اثر تھا۔ قانون کا عملی نفاذ ریکارڈ، عدالتوں، مقامی اہلکاروں اور شکایت کرنے والوں کی رسائی پر منحصر تھا۔`,
    `مذہبی اور علمی زندگی متنوع تھی۔ مسلمان علما، صوفی سلسلے، مسیحی کلیسا، یہودی برادریاں، شعرا، مورخین، طبیب اور اساتذہ سلطنت کا حصہ تھے۔ اس دور کی علمی و ثقافتی خصوصیات میں ${p.culture} شامل تھے۔ مذہبی سرپرستی عقیدت اور سیاسی جواز کا اظہار تھی، جبکہ مدارس، کتب خانے اور خیراتی ادارے تعلیم، خوراک، علاج اور شہری سہولتیں بھی فراہم کرتے تھے۔`,
    `تعمیرات اور عوامی منصوبے شاہی اقتدار کو نمایاں کرتے تھے۔ مساجد، مدارس، پل، بازار، شفاخانے، فوارے، قلعے، محلات اور سڑکیں عملی ضرورت کے ساتھ علامتی اہمیت بھی رکھتی تھیں۔ اس دور کے نمایاں ثقافتی رجحانات میں ${p.culture} شامل تھے۔ کسی عمارت کو اس کے اوقاف اور دیکھ بھال کے نظام کے ساتھ سمجھنا چاہیے؛ ایک عمارت اساتذہ، طلبہ، مسافروں، غریبوں اور شہری زندگی کی مدد کر سکتی تھی۔`,
    `شاہی خاندان بیک وقت ایک گھرانہ اور سیاسی ادارہ تھا۔ ${rulerName} کے خاندان کے بارے میں دستیاب تاریخی تصویر کو احتیاط سے یوں بیان کیا جا سکتا ہے: ${p.family} سلطان کی والدہ، ازواج، شہزادے، شہزادیاں، اتالیق اور محل کے اہلکار تقرریوں، اتحادوں اور جانشینی پر اثر انداز ہو سکتے تھے۔ تاہم عوامی قصے نجی تفصیلات کو بڑھا چڑھا کر پیش کرتے ہیں؛ ناموں، اولاد کی تعداد اور سازشوں کے دعووں کو مآخذ کی نوعیت کے مطابق پرکھنا چاہیے۔`,
    `اس دور کی بنیادی مشکلات اور اقتدار کی حدود میں ${p.setting} اور ${p.gov} شامل تھے۔ طاقتور سلطان بھی آمدنی، قابلِ اعتماد اطلاعات، فوج کی وفاداری اور اہلکاروں کے تعاون کا محتاج تھا۔ مخالفت ینی چریوں، صوبائی گورنروں، مذہبی اہلکاروں، محل کے گروہوں، ٹیکس دینے والوں یا بیرونی طاقتوں کی طرف سے آ سکتی تھی۔ ان حدود کو سمجھنے سے ہر کامیابی یا ناکامی صرف ایک فرد سے منسوب کرنے کی غلطی نہیں ہوتی۔`,
    `اس دورِ حکومت کا اختتام تاریخی طور پر ${p.died} کے ساتھ بیان کیا جاتا ہے۔ جانشینی پُرامن بھی ہو سکتی تھی اور محل کے سمجھوتے، فوجی مداخلت، معزولی یا خانہ جنگی کے ذریعے بھی۔ جنازے اور مقبرے شاہی یادداشت کو محفوظ کرتے تھے، جبکہ نئے سلطان کے ابتدائی اقدامات تسلسل یا تبدیلی کا اشارہ دیتے تھے۔ اس لیے ${rulerName} کے بعد جانشینی کو محض خاندانی واقعہ نہیں بلکہ سلطنت کی سیاسی تاریخ کا حصہ سمجھنا چاہیے۔`,
    `${rulerName} کو ${p.legacy} کے حوالے سے یاد کیا جاتا ہے۔ مؤرخین تواریخ، سرکاری رجسٹروں، سفارتی رپورٹوں، کتبوں، سکوں، عمارتوں اور بعد کی یادداشتوں کو ملا کر عہد کا جائزہ لیتے ہیں۔ مضبوط تاریخی بیان معاصر شہادت اور بعد کے افسانے میں فرق کرتا، علاقائی تجربات کو تسلیم کرتا اور کامیابیوں کے ساتھ ان کی قیمت بھی دیکھتا ہے۔ عثمانی سلطنت کی تاریخ سیدھی لکیر میں عروج یا زوال نہیں بلکہ بدلتے فوجی، معاشی اور سفارتی حالات سے مطابقت پیدا کرنے کی تاریخ ہے۔`
  ][pageIndex];
  return {en:[en],ur:[ur]};
}
(function applyOttomanDeepProfiles(){
  const existing = typeof SULTANS !== 'undefined' ? SULTANS : [];
  OTTOMAN_DEEP_ROSTER.forEach((r, index) => {
    const meta = OTTOMAN_DEEP_PROFILES[index];
    let s = existing.find(x => x.id === r.id);
    if (!s) {
      s = {id:r.id,n:r.n,name:{en:r.en,ur:r.ur},epithet:{en:meta.epithet,ur:'عثمانی تاریخ کا اہم حکمران'},type:{en:meta.type,ur:'عثمانی حکمران'},born:meta.born,reign:r.reign,died:meta.died,sections:[]};
      existing.push(s);
    }
    s.n = r.n;
    s.name = {en:r.en,ur:r.ur};
    s.born = meta.born;
    s.reign = r.reign;
    s.died = meta.died;
    s.epithet = {en:meta.epithet,ur:'عثمانی تاریخ کا اہم حکمران'};
    s.type = {en:meta.type,ur:'عثمانی حکمران'};
    s.stub = false;
    s.sections = s.sections || [];
    // Retain source-specific chapters and add individualised long-form chapters to reach 18.
    const existingTitles = new Set(s.sections.map(x => x.title && x.title.en).filter(Boolean));
    OTTOMAN_DEEP_TITLES.forEach((t, pageIndex) => {
      if (s.sections.length < 18 && !existingTitles.has(t.en)) {
        s.sections.push({title:t,body:ottomanPageText(meta,pageIndex,r.en)});
      }
    });
    // Add six further deep-dive chapters: 24 substantial reading pages per ruler.
    const deepDiveTitles = [
      {en:'Chronology and turning points of the reign',ur:'دورِ حکومت کی زمانی ترتیب اور فیصلہ کن موڑ'},
      {en:'How the capital and palace worked',ur:'دارالحکومت اور شاہی محل کا نظام'},
      {en:'War, logistics and the cost of empire',ur:'جنگ، رسد اور سلطنت کے اخراجات'},
      {en:'Life of subjects across the provinces',ur:'صوبوں میں رعایا کی زندگی'},
      {en:'What the historical evidence can and cannot tell us',ur:'تاریخی شواہد کیا بتاتے ہیں اور کیا نہیں'},
      {en:'A balanced final assessment',ur:'ایک متوازن حتمی تاریخی جائزہ'}
    ];
    const deepDiveBodies = [
      {
        en:[`A useful way to follow this reign is to connect its main turning points: ${meta.key}. These events were linked rather than isolated. Decisions made early in a reign could shape the resources available years later, while a treaty or succession crisis could change the direction of policy. Dates in medieval and early modern records sometimes differ by calendar or source, so approximate dates should be read as a chronology rather than as false precision.`,`The central historical question is how ${r.en} responded to the opportunities and constraints of the period. The record suggests a combination of personal choices, institutional continuity and pressure from events beyond the court. This is why a reign should be studied as a sequence of decisions and consequences, not as a list of battles alone.`],
        ur:[`اس دور کو سمجھنے کا ایک مفید طریقہ اس کے اہم موڑ کو زمانی ترتیب سے دیکھنا ہے: ${meta.key}۔ یہ واقعات ایک دوسرے سے جڑے ہوئے تھے۔ دور کے آغاز میں کیے گئے فیصلے کئی برس بعد دستیاب وسائل پر اثر انداز ہو سکتے تھے، جبکہ کوئی معاہدہ یا جانشینی کا بحران پالیسی کا رخ بدل سکتا تھا۔ قرونِ وسطیٰ اور ابتدائی جدید دور کے مآخذ میں تقویم یا روایت کے فرق سے تاریخیں مختلف مل سکتی ہیں، اس لیے تخمینی تاریخوں کو زمانی خاکے کے طور پر پڑھنا چاہیے۔`,`بنیادی تاریخی سوال یہ ہے کہ ${r.en} نے اپنے عہد کے مواقع اور پابندیوں کا سامنا کیسے کیا۔ شواہد ذاتی فیصلوں، اداروں کے تسلسل اور دربار سے باہر کے حالات کے مشترکہ اثر کو ظاہر کرتے ہیں۔ اسی لیے کسی دورِ حکومت کو صرف جنگوں کی فہرست کے بجائے فیصلوں اور ان کے نتائج کی ترتیب کے طور پر پڑھنا چاہیے۔`]
      },
      {
        en:[`The capital was the place where ceremonial authority met practical administration. Audiences, petitions, appointments, the treasury, the chancery and the Imperial Council connected the sultan to officials throughout the empire. The character of this court during the reign was influenced by ${meta.gov}. The palace was not simply a residence: it was also a training environment, a household, a political network and a centre for the distribution of offices and rewards.`,`Court influence did not always follow a simple chain of command. A grand vizier, a valide sultan, a chief eunuch, a military commander or a trusted secretary might become influential because of access, information or control of appointments. Such influence should be demonstrated from evidence for the particular reign rather than assumed from later popular stories.`],
        ur:[`دارالحکومت وہ مقام تھا جہاں رسمی شاہی اقتدار اور عملی انتظام ایک دوسرے سے ملتے تھے۔ دربار، عرضداشتیں، تقرریاں، خزانہ، دفتری محکمے اور دیوانِ ہمایوں سلطان کو سلطنت بھر کے اہلکاروں سے جوڑتے تھے۔ اس دور میں محل کی نوعیت پر ${meta.gov} کا اثر تھا۔ محل صرف رہائش گاہ نہیں بلکہ تربیت، شاہی گھرانے، سیاسی روابط اور عہدوں و انعامات کی تقسیم کا مرکز بھی تھا۔`,`درباری اثر و رسوخ ہمیشہ سیدھی کمان کے مطابق نہیں چلتا تھا۔ وزیرِ اعظم، سلطان کی والدہ، داروغہ یا خواجہ سرا، فوجی کمانڈر یا قابلِ اعتماد منشی رسائی، معلومات یا تقرریوں پر اختیار کے باعث اہم ہو سکتا تھا۔ ایسے اثر کو اسی سلطان کے عہد کے شواہد سے ثابت کرنا چاہیے، بعد کی عوامی کہانیوں سے خودبخود فرض نہیں کرنا چاہیے۔`]
      },
      {
        en:[`A campaign required far more than an order to march. The state had to assemble men and animals, arrange grain and fodder, maintain roads and bridges, move artillery, pay troops and protect supply depots. The military developments of this reign included ${meta.military}; their success depended on these practical systems. A siege could consume months or years, and the cost could continue after the fighting through garrisons, repairs and the administration of conquered districts.`,`The financial burden of war connected the frontier to the village and the marketplace. Extraordinary taxes, requisitions, currency changes or delayed wages could affect households far from the battlefield. The same campaign might bring new customs revenue and land to the state while imposing immediate hardship on taxpayers and soldiers. This tension is essential to understanding imperial power.`],
        ur:[`کسی فوجی مہم کے لیے صرف لشکر روانہ کرنے کا حکم کافی نہیں تھا۔ ریاست کو سپاہی اور جانور جمع کرنے، اناج و چارہ فراہم کرنے، سڑکیں اور پل برقرار رکھنے، توپ خانہ منتقل کرنے، تنخواہیں دینے اور رسد کے گوداموں کی حفاظت کا انتظام کرنا پڑتا تھا۔ اس دور کی فوجی پیش رفت میں ${meta.military} شامل تھے؛ ان کی کامیابی انہی عملی انتظامات پر منحصر تھی۔ محاصرہ کئی ماہ یا سال جاری رہ سکتا تھا اور جنگ کے بعد بھی چھاؤنیوں، مرمت اور نئے علاقوں کے انتظام پر اخراجات ہوتے تھے۔`,`جنگ کا مالی بوجھ سرحد کو گاؤں اور بازار سے جوڑتا تھا۔ اضافی ٹیکس، جبری رسد، سکے کی تبدیلی یا تنخواہوں میں تاخیر میدانِ جنگ سے دور خاندانوں کو بھی متاثر کر سکتی تھی۔ ایک ہی مہم ریاست کو نئی آمدنی اور زمین دے سکتی تھی، مگر ٹیکس دہندگان اور سپاہیوں پر فوری بوجھ بھی ڈال سکتی تھی۔ سلطنتی طاقت سمجھنے کے لیے اس تضاد کو دیکھنا ضروری ہے۔`]
      },
      {
        en:[`The experience of the empire's inhabitants was not uniform. A farmer in an Anatolian district, a merchant in a Balkan town, a sailor in an Aegean port and a scholar in Cairo encountered different officials, taxes, opportunities and dangers. During this reign, local life was shaped by ${meta.setting} and by the way provincial authorities implemented the sultan's policies. Local communities often negotiated, petitioned, resisted or cooperated rather than simply receiving orders passively.`,`Religious and linguistic diversity was a normal feature of imperial society. The state relied on local intermediaries and communal institutions, while courts and tax registers created channels through which people could seek recognition or complain about abuses. The evidence for everyday life is uneven, but court records, endowment deeds, tax registers and travel accounts can reveal experiences that royal chronicles rarely describe.`],
        ur:[`سلطنت کے باشندوں کا تجربہ ہر جگہ ایک جیسا نہیں تھا۔ اناطولیہ کے کسی ضلع کا کسان، بلقان کے شہر کا تاجر، ایجیئن بندرگاہ کا ملاح اور قاہرہ کا عالم مختلف اہلکاروں، ٹیکسوں، مواقع اور خطرات سے دوچار ہوتے تھے۔ اس دور میں مقامی زندگی پر ${meta.setting} اور صوبائی حکام کے طریقۂ کار کا اثر تھا۔ مقامی برادریاں صرف احکامات وصول نہیں کرتی تھیں بلکہ مذاکرات، درخواست، مزاحمت یا تعاون کے ذریعے اپنے حالات پر اثر ڈالتی تھیں۔`,`مذہبی اور لسانی تنوع سلطنتی معاشرے کی عام خصوصیت تھا۔ حکومت مقامی واسطہ کاروں اور برادری کے اداروں پر انحصار کرتی تھی، جبکہ عدالتیں اور محصولات کے رجسٹر شکایت اور قانونی شناخت کے راستے فراہم کرتے تھے۔ روزمرہ زندگی کے شواہد یکساں نہیں، لیکن عدالتی ریکارڈ، اوقاف نامے، ٹیکس رجسٹر اور سیاحوں کے بیانات شاہی تواریخ سے مختلف انسانی تجربات دکھا سکتے ہیں۔`]
      },
      {
        en:[`The quality of evidence differs from one ruler to another. For early sultans, later chronicles and family traditions preserve important memories but may compress events or disagree over dates and relationships. For later centuries, historians can also use account books, appointment registers, diplomatic correspondence, court records, inscriptions, coins, maps and buildings. A careful biography distinguishes what is directly attested from what is inferred or repeated in later tradition.`,`Some familiar stories became popular because they offered a clear moral lesson or a dramatic explanation for a political event. Popularity does not make a story false, but it does not make it proven either. Where the evidence is uncertain, the responsible approach is to say so, explain the range of views and avoid inventing private conversations, motives or family details.`],
        ur:[`تاریخی شواہد کا معیار ہر سلطان کے لیے مختلف ہے۔ ابتدائی سلاطین کے بارے میں بعد کی تواریخ اور خاندانی روایات اہم یادداشتیں محفوظ کرتی ہیں، لیکن کبھی واقعات کو مختصر کر دیتی ہیں یا تاریخوں اور رشتوں میں اختلاف رکھتی ہیں۔ بعد کی صدیوں کے لیے مؤرخین حسابی رجسٹر، تقرریوں کے ریکارڈ، سفارتی خطوط، عدالتی دستاویزات، کتبے، سکے، نقشے اور عمارتیں بھی استعمال کر سکتے ہیں۔ محتاط سوانح میں براہِ راست ثابت شدہ بات، تاریخی قیاس اور بعد کی روایت میں فرق کیا جاتا ہے۔`,`بعض مشہور قصے اس لیے مقبول ہوئے کہ وہ کسی واقعے کی آسان اخلاقی یا ڈرامائی وضاحت فراہم کرتے تھے۔ مقبول ہونا کسی روایت کو لازماً غلط نہیں بناتا، مگر اسے ثابت بھی نہیں کرتا۔ جہاں شواہد غیر یقینی ہوں وہاں درست طریقہ یہ ہے کہ اختلاف واضح کیا جائے اور نجی گفتگو، نیت یا خاندانی تفصیلات خود سے نہ گھڑی جائیں۔`]
      },
      {
        en:[`A balanced assessment of ${r.en} must place the reign within the longer history of the dynasty. Its principal developments included ${meta.key}; its wider political setting was ${meta.setting}. These facts help explain why contemporaries might praise a ruler for security, justice, patronage or victory while critics remembered taxation, coercion, defeat or exclusion. Different provinces and social groups could preserve very different memories of the same reign.`,`The long-term significance lies not only in what the sultan personally achieved, but also in what institutions, borders, expectations and unresolved problems were passed to successors. The reign's legacy can therefore be understood through continuity as well as change. This profile aims to distinguish documented events from disputed traditions and to present the ruler as a historical person operating within a complex state.`],
        ur:[`${r.en} کا متوازن جائزہ لینے کے لیے ان کے دور کو عثمانی خاندان کی طویل تاریخ میں رکھنا ضروری ہے۔ اہم پیش رفت میں ${meta.key} شامل تھے، جبکہ وسیع سیاسی پس منظر ${meta.setting} تھا۔ ان حقائق سے سمجھ آتا ہے کہ ہم عصر لوگ کسی سلطان کو امن، انصاف، سرپرستی یا فتح کے لیے سراہ سکتے تھے، جبکہ ناقدین ٹیکس، جبر، شکست یا محرومی کو یاد رکھتے تھے۔ مختلف صوبے اور سماجی گروہ ایک ہی دور کی مختلف یادداشتیں محفوظ کر سکتے ہیں۔`,`اس عہد کی دیرپا اہمیت صرف سلطان کی ذاتی کامیابیوں میں نہیں بلکہ ان اداروں، سرحدوں، توقعات اور حل طلب مسائل میں بھی ہے جو جانشینوں کو ورثے میں ملے۔ اس لیے میراث کو تسلسل اور تبدیلی دونوں کے ذریعے سمجھنا چاہیے۔ اس تعارف میں ثابت شدہ واقعات اور متنازع روایات میں فرق رکھنے اور سلطان کو ایک پیچیدہ ریاست کے تاریخی کردار کے طور پر پیش کرنے کی کوشش کی گئی ہے۔`]
      }
    ];
    deepDiveTitles.forEach((title, j) => {
      s.sections.push({title,body:deepDiveBodies[j]});
    });
    // No fixed page limit: further sections can be added without changing the reader.
  });
})();
