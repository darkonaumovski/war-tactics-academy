import type { LeadershipVolume, Source } from "../../lib/types";
// Lessons are added in reviewed batches; docs/LEADERSHIP_EVIDENCE.md records
// which sources can carry each one, and docs/SOURCE_AUDIT.md how each was read.
const archive = (id: string) => `https://archive.org/details/${id}`;
const fondation = "Fondation Napoléon";
const britannica = "Encyclopaedia Britannica";
const s = {
  houdecek: {
    title:
      "Bulletins de la Grande Armée commandés par Napoléon (François Houdecek, 2019)",
    url: "https://www.napoleon.org/histoire-des-2-empires/objets/bulletin-de-la-grande-armee",
    publisher: fondation,
  },
  nice: {
    title:
      "De Paris à Milan, mars–mai 1796 (Revue du Souvenir Napoléonien 406)",
    url: "https://www.napoleon.org/wp-content/themes/napoleon/annexes/hors-serie/premiere-campagne-italie/fr/lesecrits/articles/articles01.html",
    publisher: fondation,
  },
  arcole: {
    title: "Arcole",
    url: "https://www.napoleon.org/en/magazine/places/arcole-2/",
    publisher: fondation,
  },
  marengo: {
    title: "Marengo",
    url: "https://www.napoleon.org/en/magazine/places/marengo-2/",
    publisher: fondation,
  },
  short: {
    title: "Was Napoleon Short? (Alicja Zelazko)",
    url: "https://www.britannica.com/story/was-napoleon-short",
    publisher: britannica,
  },
  stanhope: {
    title:
      "Earl Stanhope, Notes of Conversations with the Duke of Wellington, 1831–1851",
    url: archive("notesofconversat00stanrich"),
    publisher: "Internet Archive",
  },
  gourgaud: {
    title: "Talks of Napoleon at St. Helena with General Baron Gourgaud (1903)",
    url: archive("talksofnapoleona01gour"),
    publisher: "Internet Archive",
  },
  metternich: {
    title: "Memoirs of Prince Metternich, 1773–1815, vol. 1",
    url: archive("memoirsofprincem0001prin"),
    publisher: "Internet Archive",
  },
  chaptal: {
    title: "Jean-Antoine Chaptal, Mes souvenirs sur Napoléon (1893), in French",
    url: archive("messouvenirssurn00chapuoft"),
    publisher: "Plon (Internet Archive)",
  },
  thibaudeau: {
    title:
      "A. C. Thibaudeau, Bonaparte and the Consulate, translated and edited by G. K. Fortescue",
    url: archive("bonaparteconsula00thib"),
    publisher: "Methuen (Internet Archive)",
  },
  fischhoff: {
    title:
      "Baruch Fischhoff, Fifty years of hindsight bias research: Reflection on Fischhoff (1975), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/39913490/",
    publisher: "Journal of Experimental Psychology (PubMed)",
  },
  clausewitz: {
    title: "Carl von Clausewitz, On War, translated by J. J. Graham",
    url: "https://www.gutenberg.org/files/1946/1946-h/1946-h.htm",
    publisher: "Project Gutenberg",
  },
  timeline: {
    title: "Austerlitz, 2 December 1805: a timeline",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/timelines/austerlitz-2-december-1805-a-timeline",
    publisher: fondation,
  },
  corsican: {
    title:
      "The Corsican: A Diary of Napoleon’s Life in His Own Words, ed. R. M. Johnston",
    url: archive("corsicandiary00napouoft"),
    publisher: "Houghton Mifflin, 1910 (Internet Archive)",
  },
  rose: {
    title: "J. Holland Rose, “Napoleon I.”, Encyclopædia Britannica, 11th ed.",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Napoleon_I.",
    publisher: "Wikisource",
  },
  italy: {
    title: "French Revolutionary wars: Campaign in Italy",
    url: "https://www.britannica.com/event/French-revolutionary-wars/Campaign-in-Italy",
    publisher: britannica,
  },
  forces: {
    title: "Napoleonic Wars: French and British armed forces",
    url: "https://www.britannica.com/event/Napoleonic-Wars/French-and-British-armed-forces",
    publisher: britannica,
  },
  russia: {
    title: "Napoleonic Wars: The Russian campaign, 1812",
    url: "https://www.britannica.com/event/Napoleonic-Wars/France-and-northern-Europe-1809-12",
    publisher: britannica,
  },
  retreat: {
    title: "Napoleonic Wars: The retreat from Moscow",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-retreat-from-Moscow",
    publisher: britannica,
  },
  borodino: {
    title: "Battle of Borodino",
    url: "https://www.britannica.com/event/Battle-of-Borodino",
    publisher: britannica,
  },
  smolensk: {
    title: "Battle of Smolensk (John Swift)",
    url: "https://www.britannica.com/event/Battle-of-Smolensk",
    publisher: britannica,
  },
  acre: {
    title: "Siege of Acre (Adrian Gilbert)",
    url: "https://www.britannica.com/event/Siege-of-Acre-1799",
    publisher: britannica,
  },
  caulaincourt: {
    title:
      "With Napoleon in Russia: The Memoirs of General de Caulaincourt, ed. Jean Hanoteau, abridged by George Libaire",
    url: archive("in.ernet.dli.2015.58850"),
    publisher: "William Morrow, 1935 (Internet Archive)",
  },
  kahnemanKlein: {
    title:
      "Daniel Kahneman and Gary Klein, Conditions for intuitive expertise: a failure to disagree (2009), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/19739881/",
    publisher: "American Psychologist (PubMed)",
  },
  klein: {
    title: "Gary Klein, Naturalistic decision making (2008), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/18689053/",
    publisher: "Human Factors (PubMed)",
  },
  lentz: {
    title:
      "Bullet Point #5: Was the Egyptian Campaign one of Napoleon’s great successes? (Thierry Lentz)",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/articles/bullet-point-5-egyptian-campaign-one-napoleons-great-successes/",
    publisher: fondation,
  },
  ganiere: {
    title:
      "La retraite de Russie (Paul Ganière, Revue du Souvenir Napoléonien 354)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/la-retraite-de-russie/",
    publisher: fondation,
  },
  fili: {
    title:
      "1812 La Campagne de Russie : 2 : De Borodino à Moscou (Hamish Davey-Wright)",
    url: "https://www.napoleon.org/histoire-des-2-empires/chronologies/1812-la-campagne-de-russie-2-de-borodino-a-moscou/",
    publisher: fondation,
  },
  bialek: {
    title:
      "Michał Białek, Michał Węgrzyn and Ethan Meyers, Escalation of commitment is independent of numeracy and cognitive reflection: failed replication and extension of Staw (1976), abstract",
    url: "https://journals.ue.poznan.pl/ebr/article/view/428",
    publisher: "Economics and Business Review",
  },
  flora: {
    title: "Replications of Staw (1976), Knee-deep in the big muddy",
    url: "https://forrt.org/flora-replication-atlas/doi/10.1016/0030-5073(76)90005-2/",
    publisher: "FLoRA Replication Atlas",
  },
  sleesman: {
    title:
      "Dustin Sleesman and others, Cleaning up the big muddy: a meta-analytic review of the determinants of escalation of commitment (2012), abstract",
    url: "https://doi.org/10.5465/amj.2010.0696",
    publisher: "Academy of Management Journal",
  },
  artillery: {
    title:
      "“Artillery”, Encyclopædia Britannica, 11th ed., section on Gribeauval’s reforms",
    url: "https://en.wikisource.org/wiki/Page:EB1911_-_Volume_02.djvu/729",
    publisher: "Wikisource",
  },
  frw: {
    title: "“French Revolutionary Wars”, Encyclopædia Britannica, 11th ed.",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/French_Revolutionary_Wars",
    publisher: "Wikisource",
  },
  campaigns: {
    title: "“Napoleonic Campaigns”, Encyclopædia Britannica, 11th ed.",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Napoleonic_Campaigns",
    publisher: "Wikisource",
  },
  firstCoalition: {
    title:
      "French Revolutionary wars: The First Coalition and the Jacobin regime",
    url: "https://www.britannica.com/event/French-revolutionary-wars/The-First-Coalition-and-the-Jacobin-regime",
    publisher: britannica,
  },
  archduke: {
    title: "Archduke Charles",
    url: "https://www.britannica.com/biography/Archduke-Charles",
    publisher: britannica,
  },
  jena: {
    title: "Battle of Jena",
    url: "https://www.britannica.com/event/Battle-of-Jena",
    publisher: britannica,
  },
  jenaCampaign: {
    title:
      "Napoleonic Wars: Trafalgar and Italy (the campaign of Jena and Auerstädt)",
    url: "https://www.britannica.com/event/Napoleonic-Wars/Trafalgar-and-Italy",
    publisher: britannica,
  },
  coalitions: {
    title: "Napoleonic Wars: The Third and Fourth Coalitions, 1803–07",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-Third-and-Fourth-Coalitions-1803-07",
    publisher: britannica,
  },
  ulm: {
    title: "Battle of Ulm",
    url: "https://www.britannica.com/event/Battle-of-Ulm",
    publisher: britannica,
  },
  marengoBattle: {
    title: "Battle of Marengo",
    url: "https://www.britannica.com/event/Battle-of-Marengo",
    publisher: britannica,
  },
  france1814: {
    title: "Napoleonic Wars: The campaign of France, 1814",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-campaign-of-France-1814",
    publisher: britannica,
  },
  autumn1813: {
    title: "Napoleonic Wars: Dispositions for the autumn campaign",
    url: "https://www.britannica.com/event/Napoleonic-Wars/Dispositions-for-the-autumn-campaign",
    publisher: britannica,
  },
  tolentino: {
    title:
      "De Mantoue à Tolentino, juin 1796 – février 1797 (Revue du Souvenir Napoléonien 410)",
    url: "https://www.napoleon.org/wp-content/themes/napoleon/annexes/hors-serie/premiere-campagne-italie/fr/lesecrits/articles/articles02.html",
    publisher: fondation,
  },
  linden: {
    title:
      "Davout, homme de devoir. 1. Le soldat (Jean Linden, Revue du Souvenir Napoléonien 303)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/davout-homme-de-devoir-1-le-soldat/",
    publisher: fondation,
  },
  collapse: {
    title:
      "The collapse of the Grand Empire: introduction to volume 14 of the Correspondance générale (François Houdecek)",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/articles/collapse-grand-empire-introduction-volume-14-correspondance-generale-de-napoleon-bonaparte-leipzig-juillet-1813-decembre-1813/",
    publisher: fondation,
  },
  criste: {
    title: "Weyrother, Franz von (Oscar Criste, ADB 42, 1897), in German",
    url: "https://www.deutsche-biographie.de/sfz85314.html",
    publisher: "Allgemeine Deutsche Biographie",
  },
  houssaye: {
    title: "Henry Houssaye, 1815: Waterloo",
    url: archive("1815waterloo00hous"),
    publisher: "Internet Archive",
  },
  gilbertMalone: {
    title:
      "Daniel Gilbert and Patrick Malone, The correspondence bias (1995), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/7870861/",
    publisher: "Psychological Bulletin (PubMed)",
  },
  schyns: {
    title:
      "Birgit Schyns, Jörg Felfe and Hartmut Blank, Is charisma hyper-romanticism? Empirical evidence from new data and a meta-analysis (2007), abstract",
    url: "https://doi.org/10.1111/j.1464-0597.2007.00302.x",
    publisher: "Applied Psychology",
  },
  mooreHealy: {
    title:
      "Don Moore and Paul Healy, The trouble with overconfidence (2008), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/18426301/",
    publisher: "Psychological Review (PubMed)",
  },
  mitchell: {
    title:
      "Deborah Mitchell, J. Edward Russo and Nancy Pennington, Back to the future: temporal perspective in the explanation of events (1989), abstract",
    url: "https://doi.org/10.1002/bdm.3960020103",
    publisher: "Journal of Behavioral Decision Making",
  },
  harrisonHorne: {
    title:
      "Yvonne Harrison and James Horne, The impact of sleep deprivation on decision making: a review (2000), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/11014055/",
    publisher: "Journal of Experimental Psychology: Applied (PubMed)",
  },
  lodiBattle: {
    title: "Battle of Lodi",
    url: "https://www.britannica.com/event/Battle-of-Lodi",
    publisher: britannica,
  },
  gros: {
    title:
      "Le Tableau de Gros : Les Pestiférés de Jaffa (Guy Ledoux-Lebard, Souvenir Napoléonien 255)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/le-tableau-de-gros-les-pestiferes-de-jaffa/",
    publisher: fondation,
  },
  grosPainting: {
    title: "Bonaparte visiting the plague victims of Jaffa",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/paintings/2-bonaparte-visiting-the-plague-victims-of-jaffa/",
    publisher: fondation,
  },
  wounds: {
    title: "Les blessures de Napoléon (Xavier Riaud)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/les-blessures-de-napoleon/",
    publisher: fondation,
  },
  marbot: {
    title: "The Memoirs of Baron de Marbot, vol. 1, translated by A. J. Butler",
    url: archive("TheMemoirsOfBaronDeMarbotVol1"),
    publisher: "Internet Archive",
  },
  bourgogne: {
    title: "Memoirs of Sergeant Bourgogne, 1812–1813",
    url: archive("memoirsofsergean00bour"),
    publisher: "Internet Archive",
  },
  steffens: {
    title:
      "Niklas Steffens and others, Advancing the social identity theory of leadership: a meta-analytic review of leader group prototypicality (2020), abstract",
    url: "https://doi.org/10.1177/2041386620962569",
    publisher: "Organizational Psychology Review",
  },
  barsade: {
    title:
      "Sigal Barsade, The ripple effect: emotional contagion and its influence on group behavior (2002), abstract",
    url: "https://doi.org/10.2307/3094912",
    publisher: "Administrative Science Quarterly",
  },
  legion: {
    title: "La Légion d’honneur : une récompense militaire et civile",
    url: "https://www.napoleon.org/histoire-des-2-empires/dossiers-thematiques/la-legion-dhonneur-une-recompense-militaire-et-civile/",
    publisher: fondation,
  },
  chabanier: {
    title:
      "La Légion d’honneur sous l’Empire (Colonel Chabanier, Revue du Souvenir Napoléonien 269)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/la-legion-dhonneur-sous-lempire/",
    publisher: fondation,
  },
  endOfWar: {
    title:
      "Napoleonic Wars: Schwarzenberg’s advance and retreat, the Aisne and the advance on Paris",
    url: "https://www.britannica.com/event/Napoleonic-Wars/Schwarzenbergs-advance-and-retreat",
    publisher: britannica,
  },
  deci: {
    title:
      "Edward Deci, Richard Koestner and Richard Ryan, A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation (1999), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/10589297/",
    publisher: "Psychological Bulletin (PubMed)",
  },
  colquitt: {
    title:
      "Jason Colquitt and others, Justice at the millennium, a decade later (2013), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/23458336/",
    publisher: "Journal of Applied Psychology (PubMed)",
  },
  scharnhorst: {
    title: "Scharnhorst, Gerhard Johann David von",
    url: "https://en.wikisource.org/wiki/The_New_International_Encyclop%C3%A6dia/Scharnhorst,_Gerhard_Johann_David_von",
    publisher: "The New International Encyclopædia (Wikisource)",
  },
  gneisenau: {
    title: "August, Count Neidhardt von Gneisenau",
    url: "https://www.britannica.com/biography/August-Count-Neidhart-von-Gneisenau",
    publisher: britannica,
  },
  blucher: {
    title: "Gebhard Leberecht von Blücher, Fürst von Wahlstatt",
    url: "https://www.britannica.com/biography/Gebhard-Leberecht-von-Blucher-Furst-von-Wahlstatt",
    publisher: britannica,
  },
  branda: {
    title:
      "Il y a 230 ans, les premières victoires de la campagne d’Italie (Pierre Branda)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/la-chronique-de-pierre-branda-il-y-a-230-ans-les-premieres-victoires-de-la-campagne-ditalie/",
    publisher: fondation,
  },
  egypt: {
    title: "Egypt: The French occupation and its consequences (1798–1805)",
    url: "https://www.britannica.com/place/Egypt/From-the-French-to-the-British-occupation-1798-1882",
    publisher: britannica,
  },
  jabarti: {
    title:
      "Journal d’Abdurrahman Gabarti pendant l’occupation française en Égypte, translated by Alexandre Cardin (1838), in French",
    url: archive("journaldabdurra00cardgoog"),
    publisher: "Internet Archive",
  },
  austerlitzPlace: {
    title: "Austerlitz: the battlefield",
    url: "https://www.napoleon.org/en/magazine/places/austerlitz-2",
    publisher: fondation,
  },
  bulletin29: {
    title:
      "The 29th Bulletin (The Napoleon.org Bulletin, no. 650, December 2012)",
    url: "https://www.napoleon.org/wp-content/archives/newsletters/1177.html",
    publisher: fondation,
  },
  waterlooDespatch: {
    title: "Wellington’s Waterloo dispatch to Lord Bathurst, 19 June 1815",
    url: "https://en.wikisource.org/wiki/Wellingon%27s_Waterloo_dispatch_to_Lord_Bathurst,_19_June_1815",
    publisher: "Wikisource",
  },
  dirks: {
    title:
      "Kurt Dirks and Donald Ferrin, Trust in leadership: meta-analytic findings and implications for research and practice (2002), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/12184567/",
    publisher: "Journal of Applied Psychology (PubMed)",
  },
  kim: {
    title:
      "Peter Kim and others, Removing the shadow of suspicion: the effects of apology versus denial for repairing competence- versus integrity-based trust violations (2004), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/14769123/",
    publisher: "Journal of Applied Psychology (PubMed)",
  },
  lodi: {
    title: "Lodi",
    url: "https://www.napoleon.org/en/magazine/places/lodi-2/",
    publisher: fondation,
  },
  remusat: {
    title: "Memoirs of Madame de Rémusat, 1802–1808, vol. 1",
    url: archive("memoirsofmadamed01remu"),
    publisher: "Internet Archive",
  },
  polish1807: {
    title:
      "La campagne de Pologne de 1807 (Paul Ganière, Revue du Souvenir Napoléonien 357)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/campagne-de-pologne-de-1807/",
    publisher: fondation,
  },
  winter1807: {
    title:
      "Napoleonic Wars: The winter campaign of 1806–07 (Eylau and Friedland)",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-winter-campaign-of-1806-07-Eylau",
    publisher: britannica,
  },
  hicks: {
    title: "La bataille d’Aspern – Essling, 21-22 mai 1809 (Peter Hicks)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/la-bataille-daspern-essling-21-22-mai-1809/",
    publisher: fondation,
  },
  aspern: {
    title: "Napoleonic Wars: Aspern-Essling, Wagram and the Peace of Vienna",
    url: "https://www.britannica.com/event/Napoleonic-Wars/Aspern-Essling",
    publisher: britannica,
  },
  lannes: {
    title: "Jean Lannes, duc de Montebello",
    url: "https://www.britannica.com/biography/Jean-Lannes-duc-de-Montebello",
    publisher: britannica,
  },
  berthier: {
    title: "Louis-Alexandre Berthier, prince de Wagram",
    url: "https://www.britannica.com/biography/Louis-Alexandre-Berthier-prince-de-Wagram",
    publisher: britannica,
  },
  gambiez: {
    title: "Berthier, Louis-Alexandre (General Gambiez, Dictionnaire Napoléon)",
    url: "https://www.napoleon.org/histoire-des-2-empires/biographies/berthier-louis-alexandre-1753-1815-prince-de-neufchatel-prince-de-wagram-marechal/",
    publisher: fondation,
  },
  jourquin: {
    title:
      "Bacler d’Albe, Louis Albert Guislain (Jacques Jourquin, Dictionnaire du Premier Empire)",
    url: "https://www.napoleon.org/histoire-des-2-empires/biographies/bacler-dalbe-louis-albert-guislain-baron-1761-1824-ingenieur-geographe-dessinateur/",
    publisher: fondation,
  },
  lejeune: {
    title: "Lejeune, témoin et peintre de l’épopée : Lejeune et Napoléon",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/lejeune-temoin-et-peintre-de-lepopee-lejeune-et-napoleon/",
    publisher: fondation,
  },
  tsas: {
    title:
      "Ney et le combat des Quatre-Bras (François Tsas, Revue du Souvenir Napoléonien 271)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/ney-et-le-combat-des-quatre-bras/",
    publisher: fondation,
  },
  blucherWaterloo: {
    title: "Blücher and the Waterloo campaign",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/close-up/a-close-up-on-blucher-and-the-waterloo-campaign",
    publisher: fondation,
  },
  blucherNdb: {
    title:
      "Blücher von Wahlstatt, Gebhard Leberecht Fürst (Hans Haussherr, NDB 2, 1955), in German",
    url: "https://www.deutsche-biographie.de/sfz35354.html",
    publisher: "Neue Deutsche Biographie",
  },
  muffling: {
    title: "Baron von Müffling, Passages from My Life",
    url: archive("passagesfrommyli00mfuoft"),
    publisher: "Internet Archive",
  },
  hundredDays: {
    title: "Napoleonic Wars: The Congress of Vienna and the Hundred Days",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-Congress-of-Vienna-and-the-Hundred-Days",
    publisher: britannica,
  },
  empowering: {
    title:
      "Allan Lee, Sara Willis and Amy Wei Tian, Empowering leadership: a meta-analytic examination of incremental contribution, mediation, and moderation (2017), abstract",
    url: "https://doi.org/10.1002/job.2220",
    publisher: "Journal of Organizational Behavior",
  },
  levinthal: {
    title:
      "Daniel Levinthal and James March, The myopia of learning (1993), abstract",
    url: "https://doi.org/10.1002/smj.4250141009",
    publisher: "Strategic Management Journal",
  },
  peninsular: {
    title: "Peninsular War",
    url: "https://www.britannica.com/event/Peninsular-War",
    publisher: britannica,
  },
  mediation: {
    title: "Napoleonic Wars: The Austrian attempt at mediation",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-Austrian-attempt-at-mediation",
    publisher: britannica,
  },
  chatillon: {
    title:
      "Napoleonic Wars: The Congress of Châtillon and the Treaty of Chaumont",
    url: "https://www.britannica.com/event/Napoleonic-Wars/Schwarzenbergs-advance-and-retreat",
    publisher: britannica,
  },
  timeline1813: {
    title: "1813 and the lead up to the Battle of Leipzig (timeline)",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/timelines/38920/",
    publisher: fondation,
  },
  kutuzovBio: {
    title: "Kutuzov, Mikhail Illarionovich Golenishchev (biography)",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/biographies/kutuzov-mikhail-illarionovich-golenishchev/",
    publisher: fondation,
  },
  nam: {
    title: "Battle of Waterloo",
    url: "https://www.nam.ac.uk/explore/battle-waterloo",
    publisher: "National Army Museum",
  },
  battesti: {
    title:
      "L’Égypte française, du départ de Bonaparte à l’assassinat de Kléber (Michèle Battesti)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/legypte-francaise-du-depart-de-bonaparte-a-lassassinat-de-kleber-23-aout-1799-14-juin-1800/",
    publisher: fondation,
  },
  kleberBio: {
    title: "Kléber, Jean-Baptiste (biography)",
    url: "https://www.napoleon.org/histoire-des-2-empires/biographies/kleber-jean-baptiste-1753-1800-general/",
    publisher: fondation,
  },
  bp5: {
    title:
      "Bullet Point #5: Was the Egyptian Campaign one of Napoleon’s great successes? (Thierry Lentz)",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/articles/bullet-point-5-egyptian-campaign-one-napoleons-great-successes/",
    publisher: fondation,
  },
  adieux: {
    title: "La campagne de France de 1814 (chronology)",
    url: "https://www.napoleon.org/histoire-des-2-empires/chronologies/la-campagne-de-france-de-1814/",
    publisher: fondation,
  },
  peterI: {
    title: "Peter I, king of Serbia",
    url: "https://www.britannica.com/biography/Peter-I-king-of-Serbia",
    publisher: britannica,
  },
  putnik: {
    title: "Radomir Putnik",
    url: "https://www.britannica.com/biography/Radomir-Putnik",
    publisher: britannica,
  },
  bjelajac: {
    title: "Serbia (Mile Bjelajac), 1914-1918-online",
    url: "https://encyclopedia.1914-1918-online.net/article/serbia/",
    publisher: "1914-1918-online",
  },
  ordonez: {
    title: "Lisa Ordóñez and others, Goals gone wild (2009), abstract",
    url: "https://doi.org/10.5465/amp.2009.37007999",
    publisher: "Academy of Management Perspectives",
  },
  edmondson: {
    title:
      "Amy Edmondson, Psychological safety and learning behavior in work teams (1999), abstract",
    url: "https://doi.org/10.2307/2666999",
    publisher: "Administrative Science Quarterly",
  },
  keltner: {
    title:
      "Dacher Keltner, Deborah Gruenfeld and Cameron Anderson, Power, approach, and inhibition (2003), abstract",
    url: "https://doi.org/10.1037/0033-295X.110.2.265",
    publisher: "Psychological Review",
  },
  galinsky: {
    title:
      "Adam Galinsky and others, Power and perspectives not taken (2006), abstract",
    url: "https://doi.org/10.1111/j.1467-9280.2006.01824.x",
    publisher: "Psychological Science",
  },
  prospect: {
    title: "Daniel Kahneman and Amos Tversky, Prospect theory (1979), abstract",
    url: "https://doi.org/10.2307/1914185",
    publisher: "Econometrica",
  },
  robinson: {
    title:
      "Sandra Robinson and Denise Rousseau, Violating the psychological contract (1994), abstract",
    url: "https://doi.org/10.1002/job.4030150306",
    publisher: "Journal of Organizational Behavior",
  },
} satisfies Record<string, Source>;

export const napoleonVolume: LeadershipVolume = {
  commanderSlug: "napoleon-bonaparte",
  title: "Leadership Lessons from Napoleon",
  summary:
    "What a person who leads others can take from Napoleon’s career, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "Napoleon won for nearly two decades and then lost everything. Each lesson here tests one claim about leading people against the record of that career: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. One career cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question: "Did Napoleon get worse, or did the problem get harder?",
  parts: [
    "Orientation",
    "Judgement",
    "Moving people",
    "Building the instrument",
    "The limits of the self",
    "What remains",
  ],
  inProgress:
    "Seventeen lessons are available. Two more are planned, and the last will answer the question above.",
  lessons: [
    {
      slug: "how-to-read-napoleon",
      title: "How to learn from Napoleon without being fooled by him",
      part: "Orientation",
      themes: ["communication", "ethics"],
      claim:
        "When a leader also wrote the record of their own leadership, a lesson drawn from that record is worth only as much as the evidence that does not come from them.",
      moment: {
        text: "On 30 November 1811 Napoleon told Berthier to press on without pause with writing the campaigns of 1805 to 1809, because otherwise nothing would remain. The collected bulletins were to be reprinted, and he said how: retouched, with the things recognised as false taken out, faults of style corrected, and staff papers added, such as lists of prisoners and captured flags. An official work of this kind had already been made for Marengo. The man who would be history’s main witness to these campaigns was editing the evidence while he still held power.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "citing Correspondance générale, no. 29 217" },
        ],
      },
      episodes: [
        {
          title: "A proclamation written nineteen years late",
          text: "The most quoted speech of his first command tells the soldiers of the Army of Italy that they are naked and ill-fed, and promises them the most fertile plains in the world. It is dated March 1796 in his published correspondence and has often been reprinted without comment. An article in the Fondation Napoléon’s review traces it. One survivor of the campaign gives roughly this text, but in memoirs written in 1844, after it had appeared in a history and in the Mémorial of St Helena. Three other officers who were present remember speeches at parades and reviews with the same sense but not these words or this style, and they say the speeches were not always well received. The article concludes that the text was composed on the way to St Helena to sum up those speeches: the voice is that of 1815, not 1796.",
          evidence: "fact",
          refs: [{ source: 1, locator: "“Fausse et vraie proclamations”" }],
          battleSlugs: ["montenotte"],
        },
        {
          title: "The bridge at Arcole",
          text: "On 15 November 1796 Augereau could not get across the bridge at Arcole. Bonaparte tried in his turn and could not get his troops to follow him. The fighting went on for two more days and turned on a bridge built over the Alpone, which let Augereau’s divisions reach the Austrian rear. The image that survived is different. Gros painted the proud young general on the bridge, and the obelisk raised on the site in 1810 says that he seized the standard, hurled himself onto the bridge, gave his men the courage to fight and destroyed the Austrians. What the stone records as the turning point was, on the Fondation’s own account, an attempt that failed.",
          evidence: "fact",
          refs: [{ source: 2 }],
          battleSlugs: ["arcole"],
        },
        {
          title: "Marengo made official",
          text: "The Fondation’s account of Marengo says that victory was never so close to defeat. By two in the afternoon on 14 June 1800 the French position was so bad that Melas left the field to announce his success. Desaix’s troops arrived at about five, Bonaparte halted the retreat, and the counter-attack followed, in which Desaix fell. Afterwards came paintings, sculpture, monuments and a tomb at the Great St Bernard, all magnifying the hero, and the official work that Houdecek names as the model for the later campaign histories. A battle saved by a subordinate’s arrival entered the record as the First Consul’s.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 0 }],
          battleSlugs: ["marengo"],
        },
        {
          title: "A legend he could not control",
          text: "Not every legend was his. Britannica’s account of his height notes that he censored the press and dictated his life story in exile, yet could not stop the rumour that he was short. Le Petit Caporal was a term of affection from his soldiers, not a description, and French paintings of the time suggest a man of average stature.",
          evidence: "fact",
          refs: [{ source: 4 }],
          battleSlugs: [],
        },
      ],
      witnesses: [
        {
          who: "Napoleon, in the bulletins",
          stake: "The bulletins were instruments of war and of his own renown.",
          says: "Dictated by him and worked up by staff officers, they magnified great deeds and minimised setbacks and losses. Proclamations were reworked before publication so that victory would look foreseen.",
          refs: [{ source: 0 }],
        },
        {
          who: "Napoleon on St Helena, as Gourgaud records him",
          stake:
            "A defeated man arguing with the verdict, in conversation with a companion in exile.",
          says: "He lists his own errors of 1815, then concludes: “It was fate; for after all, I ought to have won that battle.”",
          refs: [{ source: 6, locator: "pp. 188–189" }],
        },
        {
          who: "Metternich",
          stake:
            "He wrote long afterwards, about a private meeting with his great opponent.",
          says: "At Dresden in June 1813, he says, Napoleon answered him in a rage: “a man such as I am does not concern himself much about the lives of a million of men.”",
          refs: [{ source: 7, locator: "p. 190" }],
        },
        {
          who: "Wellington, as Earl Stanhope records him",
          stake:
            "His opponent, speaking years after the wars and reported by a friend.",
          says: "Told that Napoleon knew soldiers by name, he said that a general, Lobau, prepared lists for him, and that in all Napoleon wrote “you never find a thing related precisely as it happened.”",
          refs: [{ source: 5, locator: "p. 24" }],
        },
        {
          who: "Chaptal",
          stake:
            "Once his minister, writing after his fall. The same memoir admires him and condemns him.",
          says: "He describes the First Consul remembering every name from his youth at Valence, and elsewhere says that most generals approached him trembling.",
          refs: [{ source: 8, locator: "pp. 183–184, 247" }],
        },
        {
          who: "G. K. Fortescue, editing Thibaudeau in 1908",
          stake:
            "An admirer of the First Consul, who prefers the younger man’s words to the older man’s.",
          says: "He refused to compare Thibaudeau with St Helena, where he heard only “the distorted memories of a prematurely dying man.”",
          refs: [{ source: 9, locator: "p. viii" }],
        },
      ],
      strategist: [
        {
          text: "A record was a weapon before it was a memory. The bulletins went to the prefects and were read from pulpits at Sunday sermons, in schools, taverns and theatres, and being named in one was an honour that soldiers and regiments watched for. Shading a report served morale and opinion at home; a commander at war had reasons that were not vanity. It follows that a bulletin is good evidence of what he wanted believed at that moment, which is worth knowing, and weak evidence of what happened.",
          evidence: "interpretation",
          refs: [{ source: 0 }],
        },
        {
          text: "The reader’s first discipline is to stop at the moment of decision. Ask what Bonaparte could know at Marengo before five in the afternoon, not what the paintings show. Napoleon makes the point against himself on St Helena: “When one looks at results one can commonly perceive what one ought to have done.” A decision has to be judged on the information, means and alternatives available when it was taken, and a good one can still lose. The later lessons hold to that rule, and say so when the evidence will not let them.",
          evidence: "interpretation",
          refs: [{ source: 6, locator: "p. 186" }, { source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Hindsight bias",
          base: "review",
          text: "Fischhoff, who began this line of research in 1975, describes hindsight bias as failing to realise how far seeing an event has changed one’s view of it, so that what happened appears to have been more likely than it was. He reports that the bias has been found in many settings, historical analysis among them, that warning people about it has no discernible effect, and that helping them reconstruct earlier perspectives might help. For a reader of Napoleon the implication is uncomfortable. Knowing about the bias is not enough. The remedy is a procedure: rebuild what was known, in the order it became known.",
          evidence: "interpretation",
          refs: [{ source: 10 }],
          limit:
            "This research describes people judging past events. It cannot say what Napoleon thought, and only the abstract of Fischhoff’s reflection was read for this lesson.",
        },
      ],
      shadow: {
        text: "Control of the record had a price. Houdecek reports that the bulletins gave the army and society a saying, “menteur comme un bulletin”, a liar like a bulletin, though he names no source for it. Soldiers could hold that view and still long to be mentioned. The deeper cost fell on Napoleon himself. Wellington could claim that he had scarcely once “tripped into truth”, and the claim is hard to dismiss. A witness who edits everything loses credit even where he is right, and his readers lose the means of telling the difference.",
        evidence: "interpretation",
        refs: [{ source: 0 }, { source: 5, locator: "p. 24" }],
      },
      counterCase: {
        text: "Wellington offers a different habit and a warning. At Walmer in 1836, talking of how testimonies vary, he said that no two people would agree on the hour Waterloo began. He thought the French proclamations were meant for Paris, and he said of Lavalette’s memoirs, “What lies he tells!” That scepticism is attractive. He was still no neutral: he was judging men he had fought, and we have these remarks only through Stanhope’s notes. A rival’s doubt is evidence to be weighed, like an admirer’s praise.",
        evidence: "interpretation",
        refs: [{ source: 5, locator: "pp. 13, 23, 88" }],
        commanderSlug: "arthur-wellesley",
        battleSlugs: ["waterloo"],
      },
      cost: {
        text: "The bulletins minimised setbacks and losses. For families who heard them read in church, that was not a question of style. The men who paid for a battle could disappear from its official account, and later lessons return to them.",
        evidence: "interpretation",
        refs: [{ source: 0 }],
      },
      transfer: {
        holdsWhen: [
          "The person whose decisions you are studying controlled the reports, the minutes or the public account.",
          "An independent record exists to set against the official one.",
        ],
        failsWhen: [
          "Every source is dismissed because each has a stake. A witness with a motive can still be right.",
          "The official record is all that survives. Then the honest course is to say what cannot be known.",
        ],
        questions: [
          "Who wrote the account of your organisation’s last success, and what did they stand to gain?",
          "What would you need to see from someone who disagreed with it?",
          "Before anyone knew the outcome, what did the decision look like?",
        ],
      },
      bearsOn:
        "Napoleon’s own testimony cannot settle whether he got worse or the problem got harder. On St Helena he offers a list of his own mistakes and he offers fate. Every lesson that follows looks for evidence that does not come from him, and says so when it cannot find any.",
      questions: [
        {
          prompt:
            "Why does the Fondation’s article doubt that the Nice proclamation dates from 1796?",
          choices: [
            "No French officers were at Nice in March 1796.",
            "Officers present recall speeches with its sense but not its words, and the one who gives its text wrote after it had been printed.",
            "It contradicts the orders Bonaparte sent to the Directory.",
          ],
          answer: 1,
          explanation:
            "Desvernois wrote in 1844, after the text was in print; Pelleport, Giraud and Roguet remember the sense of various speeches but not these words.",
        },
        {
          prompt: "What is a bulletin best used as evidence of?",
          choices: [
            "What Napoleon wanted believed at that moment.",
            "The exact order of events in a battle.",
            "The true scale of French losses.",
          ],
          answer: 0,
          explanation:
            "Bulletins magnified successes and minimised setbacks. That makes them strong evidence of intended messaging and weak evidence of events.",
        },
        {
          prompt:
            "According to Fischhoff’s summary, what has no discernible effect on hindsight bias?",
          choices: [
            "Helping people to reconstruct earlier perspectives.",
            "Studying several settings at once.",
            "Warning people about the bias.",
          ],
          answer: 2,
          explanation:
            "Warnings alone do not help, which is why the lesson recommends a procedure: rebuild what was known, in order.",
        },
      ],
      sourceCheck: {
        question: "Who were Napoleon’s bulletins and proclamations for?",
        witnesses: [
          {
            label: "Wellington, reported by Stanhope",
            claim:
              "The proclamations were seen much more in the papers than by the soldiers: they were meant for Paris.",
          },
          {
            label: "François Houdecek, Fondation Napoléon",
            claim:
              "The bulletins went to the prefects and were read at Sunday sermons, in schools, taverns and theatres, and being named in one was an honour soldiers watched for.",
          },
        ],
        prompt: "How should a historian use these two statements?",
        options: [
          {
            text: "Prefer Houdecek, because he is a modern historian.",
            feedback:
              "He has the correspondence behind him, but he describes how the bulletins were meant to spread, which does not show who actually heard them.",
          },
          {
            text: "Prefer Wellington, because he was there and fought the French.",
            feedback:
              "He was on the other side of the line, speaking years later and through Stanhope’s notes. His view is evidence of how an opponent saw these texts.",
          },
          {
            text: "Note that they discuss different texts and audiences, and that neither measures who actually heard them.",
            feedback:
              "Wellington speaks of proclamations and Houdecek chiefly of bulletins. Both can be partly right, and the question of real reach stays open.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Choose one famous Napoleonic scene you already know. What would you need to see before you believed it?",
        guidance:
          "Ask when the earliest account was written, who wrote it, what they stood to gain, and whether anyone with the opposite interest agrees. Arcole and the Nice proclamation are models.",
      },
      sources: [
        s.houdecek,
        s.nice,
        s.arcole,
        s.marengo,
        s.short,
        s.stanhope,
        s.gourgaud,
        s.metternich,
        s.chaptal,
        s.thibaudeau,
        s.fischhoff,
      ],
    },
    {
      slug: "inherit-before-you-invent",
      title: "What he inherited",
      part: "Judgement",
      themes: ["judgement", "organisation"],
      claim:
        "When a leader appears to have created a system, look first for what they inherited, and then for what they did to scale it.",
      moment: {
        text: "On 11 April 1796 an Austrian column under d’Argenteau was stopped at the redoubt of Monte Legino by the resistance of Rampon’s brigade. That night Bonaparte, twenty-six years old and only just in command of the Army of Italy, sent his forces across the Apennines by separate routes: Laharpe straight to Monte Legino, Masséna round the Austrian flank, Augereau by another pass. The Austrians were beaten at Montenotte, and a famous campaign had begun. It looks like the start of something new. Most of what made that night possible was already there when he arrived.",
        evidence: "fact",
        refs: [{ source: 0, locator: "“Les opérations”" }],
      },
      episodes: [
        {
          title: "Divisions, guns and a drill-book",
          text: "An army could march by separate routes that night because it was already built in divisions able to act on their own. Britannica dates the origins of the divisional system to the 1760s and its wholesale adoption to the Revolution, and the 1911 Britannica says that temporary divisions had hardened by 1796 into a practically universal system. The artillery he had trained in owed its form to Gribeauval, who from 1765 built a complete system of guns and carriages, was successfully resisted for a time, and could impose his ideas only from 1776. The infantry’s drill came from the same years: when Britannica describes the great army of 1805 it says that no changes were made in tactics or formation and that the infantry went on using the regulation of 1791.",
          evidence: "fact",
          refs: [
            { source: 2 },
            { source: 3 },
            { source: 1, locator: "§ 9" },
            { source: 4 },
          ],
          battleSlugs: ["montenotte"],
        },
        {
          title: "The army the Revolution raised",
          text: "The men came from the Republic. Carnot drafted the decree of 23 August 1793 that requisitioned all Frenchmen for the armies. The amalgamation of old regulars and Revolutionary volunteers was decreed that February and begun in spring 1794. The 1911 Britannica argues that out of this rough mixture the army gradually evolved its own leaders and reached its highest value in the very campaign of 1796 that made Bonaparte’s name. Promotion by proven ability was therefore something he found in place, along with a generation of officers already tested by four years of war.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 3 }],
          battleSlugs: [],
        },
        {
          title: "Ideas from books, tested at Toulon",
          text: "J. Holland Rose wrote in 1911 that Bonaparte took from the younger du Teil’s work on the new artillery, and from Guibert and Bourcet, the principle of concentrating effort against one point of the enemy’s line, which he advocated at Toulon. Chaptal remembers the plan at Toulon as worked out together by Bonaparte and General Dugommier, with Bonaparte given the most dangerous part. The site’s study records the same uncertainty among modern sources. Neither account makes the idea his invention, and neither denies that he saw how to use it.",
          evidence: "fact",
          refs: [{ source: 5 }, { source: 7, locator: "pp. 202–203" }],
          battleSlugs: ["toulon"],
        },
        {
          title: "What was his",
          text: "None of this makes him a mere heir. Britannica says that until he took command in Italy the changes in the French army had not been matched by a revolution in strategy, and that his campaign of 1796 organised the Revolution’s methods and the ideas of earlier reformers into a coherent system. The Fondation’s article credits Carnot with the intuition of main and secondary theatres and of massed action, and says the applications remained exceptional until Bonaparte made them systematic. The permanent army corps, with its own staff and services, was formed on the Channel coast and first used on the grand scale in 1805, when divisions and corps totalling some two hundred thousand men were coordinated to a single purpose.",
          evidence: "fact",
          refs: [
            { source: 6 },
            { source: 0, locator: "introduction" },
            { source: 4 },
          ],
          battleSlugs: ["ulm"],
        },
      ],
      witnesses: [
        {
          who: "J. Holland Rose, 1911",
          stake:
            "A biographer with a thesis about what made Bonaparte, writing a century later.",
          says: "He names du Teil, Guibert and Bourcet as the source of Bonaparte’s leading principle.",
          refs: [{ source: 5 }],
        },
        {
          who: "Chaptal",
          stake:
            "Once his minister, and writing what he remembered being told.",
          says: "He has Bonaparte and Dugommier concert the plan of attack at Toulon together.",
          refs: [{ source: 7, locator: "pp. 202–203" }],
        },
        {
          who: "Bonaparte at Cherasco, April 1796",
          stake:
            "A general praising his army in public, with the government at home also listening.",
          says: "He tells the soldiers they have won battles without guns, crossed rivers without bridges and made forced marches without shoes. The credit is placed on them, in words that also advertise the man who led them.",
          refs: [{ source: 0, locator: "text of the proclamation" }],
        },
        {
          who: "The Fondation Napoléon’s review",
          stake:
            "The journal of a society devoted to Napoleon, which makes its concessions the more useful.",
          says: "It credits Carnot with the idea, and it warns that the story told at St Helena drew largely on bulletins full of errors and calculated omissions.",
          refs: [{ source: 0, locator: "introduction" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, what Bonaparte added in April 1796 was a use for what he had found. Divisions that could march apart were an opportunity and a risk, since each could be caught alone. He chose to spread them over mountain roads at night and bring them together on one enemy detachment, while a single brigade on the Genoa side held on to buy time. Any general of the Republic had the same instrument. Few used it this way, and the advantage lay in the combination of inherited means with a new idea of what they were for.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "“Les opérations”" }, { source: 6 }],
        },
        {
          text: "What he left alone is as instructive as what he changed. Britannica says that he did not prescribe infantry formations to his corps commanders, that their combinations were often ineffective and wasteful, and that he made no serious attempt to introduce the two-rank firing that served the British so well. An inheritor who adds a new layer may not notice that the old layers are ageing beneath it. The instrument was excellent for the kind of campaign it had been built for, and he did not rebuild it for others.",
          evidence: "interpretation",
          refs: [{ source: 4 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Crediting the person for what the situation explains",
          base: "review",
          text: "Gilbert and Malone describe the correspondence bias as the tendency to infer a person’s lasting dispositions from behaviour that the situation could entirely explain. They call it one of the most fundamental phenomena in social psychology, and they say its causes remain poorly understood. A reader who sees a young general win six battles in a few weeks and concludes that genius explains it is at risk of exactly this inference.",
          evidence: "interpretation",
          refs: [{ source: 8 }],
          limit:
            "The bias concerns observers, so it speaks to how we read Bonaparte and not to what he was like. It does not show that his ability was small. Only the abstract was read.",
        },
        {
          mechanism: "The romance of leadership",
          base: "meta-analysis",
          text: "Schyns, Felfe and Blank combined new and earlier studies and found a positive relationship between a person’s tendency to romanticise leadership and their perception of a leader as transformational. They conclude that the perception of leadership comprises more than the leader’s actual behaviour. Admirers of Napoleon, then and since, may be telling us about the admirers.",
          evidence: "interpretation",
          refs: [{ source: 9 }],
          limit:
            "The studies concern modern students and employees rating leaders. Carrying them over to nineteenth-century opinion is this lesson’s inference, and only the abstract was read.",
        },
      ],
      shadow: {
        text: "The legend that he made it all was partly his own work. The Fondation’s article says that his St Helena account of the Italian campaign drew largely on his own bulletins, and it singles out the disputed parts played by Fornésy and Rampon at Monte Legino as an example of how hard the real events are to recover. The deeper failure was in maintenance. Britannica says there was no real training for staff work, that staff officers were chosen haphazardly, and that he was content to use men who proved still more deficient when they became theatre commanders. A system he had inherited and sharpened was not being renewed to outlast him.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "introduction" }, { source: 4 }],
      },
      counterCase: {
        text: "Archduke Charles shows the same problem from the opposite side. Britannica says that after 1801, with wide powers, he discarded Austria’s old military system and began reforms that adopted the principle of the nation in arms, French organisation and tactics, and new military academies. He had no Revolution to inherit from, so he had to import one. The army was not yet ready in 1809, but it beat Napoleon at Aspern-Essling before losing at Wagram. A reformer can be seen working in the open in a way that an inheritor cannot.",
        evidence: "interpretation",
        refs: [{ source: 10 }],
        commanderSlug: "archduke-charles",
        battleSlugs: ["aspern-essling"],
      },
      cost: {
        text: "The inheritance included compulsion. The decree of 1793 requisitioned all Frenchmen, and the 1911 Britannica observes that many were better off in the army than at home, where they lived in fear of denunciation and the guillotine. The law of 1798 replaced the levies with regular conscription, which lasted until 1815 and brought more than two million men into the army. Whatever Napoleon did with that system, the young men it took did not choose it.",
        evidence: "fact",
        refs: [{ source: 2 }, { source: 3 }, { source: 4 }],
      },
      transfer: {
        holdsWhen: [
          "The organisation had a capable structure, trained people or new methods before the celebrated leader arrived.",
          "Rivals with similar means did less with them, so that the leader’s contribution can be seen.",
        ],
        failsWhen: [
          "The leader really did build the system from nothing, as a founder sometimes does.",
          "Inheritance becomes an excuse for denying any credit to a person who plainly changed the result.",
        ],
        questions: [
          "What did your organisation’s last success owe to work done before the people now credited with it?",
          "What are you drawing on that you are not renewing?",
          "Which of your inherited methods have you stopped looking at?",
        ],
      },
      bearsOn:
        "If much of his early success drew on capital built up by others, then part of what looks like later decline may be that capital running out. Britannica calls the army of 1805 the best he was to lead. That points towards “the problem got harder”, though he was also the person who failed to renew it.",
      questions: [
        {
          prompt:
            "By when does the 1911 Britannica say the divisional system had become practically universal in the French army?",
          choices: ["1765", "1796", "1805"],
          answer: 1,
          explanation:
            "Temporary divisions hardened into a permanent system during the Revolutionary wars, before Bonaparte’s Italian campaign.",
        },
        {
          prompt:
            "What does Britannica say about the tactics of the army Napoleon led in 1805?",
          choices: [
            "No changes were made, and the infantry kept the regulation of 1791.",
            "Napoleon wrote a new drill-book for it at Boulogne.",
            "It had adopted British two-rank firing.",
          ],
          answer: 0,
          explanation:
            "Britannica places his innovation in the organisation of the army and the direction of its movements.",
        },
        {
          prompt: "What is the correspondence bias?",
          choices: [
            "Trusting letters more than memoirs.",
            "Believing that success comes from luck alone.",
            "Inferring lasting traits from behaviour that the situation could entirely explain.",
          ],
          answer: 2,
          explanation:
            "It is a tendency in the observer, which is why the lesson applies it to readers of Napoleon.",
        },
      ],
      sourceCheck: {
        question: "Whose plan took Toulon?",
        witnesses: [
          {
            label: "J. Holland Rose, 1911",
            claim:
              "Bonaparte advocated at Toulon the concentration of effort against one point, a principle he took from du Teil, Guibert and Bourcet.",
          },
          {
            label: "Chaptal, his former minister",
            claim:
              "Bonaparte and Dugommier concerted the plan of attack together, and the most dangerous part was entrusted to Bonaparte.",
          },
        ],
        prompt: "How can these two accounts be reconciled?",
        options: [
          {
            text: "They cannot: one must be wrong.",
            feedback:
              "Advocating a principle and agreeing a plan with one’s commander are different acts. Both can be true at once.",
          },
          {
            text: "Rose is right, because he is a professional historian.",
            feedback:
              "He writes with more distance, but he is explaining where an idea came from. Chaptal is describing who made the plan.",
          },
          {
            text: "An idea from books, advocated by a junior officer and adopted with his commander, fits both.",
            feedback:
              "That reading gives Bonaparte his part without making him sole author, which is the position this lesson asks you to test.",
            best: true,
          },
        ],
        battleSlug: "toulon",
      },
      seminar: {
        prompt:
          "Pick a leader celebrated for transforming an organisation. List what was already in place when they arrived.",
        guidance:
          "Then ask what no predecessor with the same means had done. Keep both lists. The lesson is in the difference between them, not in choosing one.",
      },
      sources: [
        s.nice,
        s.artillery,
        s.firstCoalition,
        s.frw,
        s.forces,
        s.rose,
        s.italy,
        s.chaptal,
        s.gilbertMalone,
        s.schyns,
        s.archduke,
      ],
    },
    {
      slug: "intuition-is-stored-work",
      title: "The coup d’œil: intuition as stored work",
      part: "Judgement",
      themes: ["judgement"],
      claim:
        "When long preparation meets a setting whose signals have stayed the same, fast judgement can be trusted; when the setting changes, the feeling of certainty outlives the reliability.",
      moment: {
        text: "A little after eight on the morning of 2 December 1805, as the mist cleared near Austerlitz, Napoleon saw that allied columns had come down from the Pratzen heights to join the attacks on Telnitz and Sokolnitz. In the diary of his words compiled by R. M. Johnston he asks Soult how long it will take to reach the plateau. Less than twenty minutes, says Soult. “If that is so, we will wait fifteen minutes more.” Soult took the heights in about half an hour, and the allies spent the rest of the morning trying to get them back. It is the classic image of the coup d’œil: one look, one order.",
        evidence: "fact",
        refs: [{ source: 1 }, { source: 3, locator: "p. 218" }],
      },
      episodes: [
        {
          title: "What the look was made of",
          text: "J. Holland Rose describes a young artillery officer at Auxonne, short of money and reading history, whose notes and essays show a resolve to master every detail of his profession. Rose says he took from the younger du Teil’s work on the new artillery, and from Guibert and Bourcet, the principle of concentrating effort against one point of the enemy’s line, which he urged at Toulon in 1793 and applied throughout his campaigns. General du Teil wrote of him after the siege: “much science, as much intelligence and too much bravery.” Rose adds that it is an exaggeration to say his fortunes were made at Toulon. Rose wrote in 1911, and his account of these influences is one historian’s judgement.",
          evidence: "fact",
          refs: [{ source: 4 }],
          battleSlugs: ["toulon"],
        },
        {
          title: "Rivoli, January 1797",
          text: "Early in 1797 Alvinczy came down the Adige while Provera marched on Mantua. Bonaparte left a defensive screen to check Provera, concentrated all his remaining troops and routed Alvinczy at Rivoli on 14 January, then regrouped at once against Provera, who capitulated two days later. This is the Toulon principle under pressure: accept risk in one place in order to be strong in another, and judge how long the screen will hold. The site’s study of Rivoli records that the sources share out the credit among Bonaparte, Masséna and Joubert, so the decision was his but the performance was not his alone.",
          evidence: "fact",
          refs: [{ source: 5 }],
          battleSlugs: ["rivoli"],
        },
        {
          title: "Austerlitz, prepared",
          text: "The fifteen minutes were not the whole of the judgement. On 21 November, eleven days before the battle, Napoleon had reconnoitred the ground that would become the battlefield. The eyes that read the Pratzen that morning already knew what it commanded. The site’s study cautions that the popular picture of a perfectly controlled trap compresses a contested fight, in which allied officers went on blaming one another for what the columns did. The anecdote is evidence of timing, resting on knowledge of the ground.",
          evidence: "fact",
          refs: [{ source: 1 }],
          battleSlugs: ["austerlitz"],
        },
      ],
      witnesses: [
        {
          who: "Clausewitz",
          stake:
            "A theorist seeking a general account of command, not a witness to these battles.",
          says: "Coup d’œil began as a correct judgment by eye of time and space in battle, and came to mean “the rapid discovery of a truth which to the ordinary mind is either not visible at all or only becomes so after long examination and reflection.”",
          refs: [{ source: 0, locator: "I.3" }],
        },
        {
          who: "Johnston’s diary of Napoleon",
          stake:
            "A compilation from Napoleon’s words and reports of them, so the scene at Austerlitz reaches us already selected.",
          says: "The exchange with Soult shows Napoleon converting a known distance into a time and then waiting for it.",
          refs: [{ source: 3, locator: "p. 218" }],
        },
        {
          who: "Chaptal",
          stake:
            "Once his minister, and critical of him elsewhere in the same memoir, which gives this praise more weight.",
          says: "He describes the First Consul questioning an old acquaintance about their youth at Valence, remembering every name and judging each person’s character accurately.",
          refs: [{ source: 2, locator: "pp. 183–184" }],
        },
        {
          who: "Wellington, as Earl Stanhope records him",
          stake: "His opponent, reported at second hand.",
          says: "“I also doubt the goodness of his memory, from the looseness and inaccuracy of his statements.”",
          refs: [{ source: 11, locator: "p. 24" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the decision at Austerlitz looks less like inspiration than like disciplined waiting. He could see columns leaving the heights. He could not know how many more would go, or how fast Kutuzov would react. The value of the fifteen minutes is that they let the movement develop while keeping the blow within reach, and that was a calculation he could make only because the ground had been studied and Soult could answer the question.",
          evidence: "interpretation",
          refs: [{ source: 1 }, { source: 3, locator: "p. 218" }],
        },
        {
          text: "The strength had a precondition. Britannica says that his system’s reduced supply trains and independent lines of operation brought great benefits so long as victory came soon, that it did not suit prolonged campaigning or retreat, and that although perfected in western Europe and northern Italy it was far less practicable in the east. Judgement formed in Italy and Moravia was judgement about a particular kind of war.",
          evidence: "interpretation",
          refs: [{ source: 6 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Recognising situations from experience",
          base: "review",
          text: "Research on naturalistic decision making studies how people decide in real-world settings. Klein’s summary says the approach emphasises the role of experience in letting people rapidly categorise situations in order to act well, and that it has been used to revise military doctrine and training. That fits what witnesses describe: the look at the Pratzen would then be recognition of a situation by someone equipped to recognise it, rather than a mysterious gift.",
          evidence: "interpretation",
          refs: [{ source: 7 }],
          limit:
            "The fit is suggestive only. Nobody can test how Napoleon reached a decision, and only the abstract was read for this lesson.",
        },
        {
          mechanism: "When intuition can be trusted",
          base: "review",
          text: "Kahneman and Klein, starting from opposed research traditions, concluded that the quality of an intuitive judgement depends on how predictable the environment is and whether the person has had the chance to learn its regularities. They add that subjective experience is not a reliable indicator of accuracy. Those two conditions give the reader a test to apply to Napoleon’s career: was this a kind of war he had had the chance to learn, and did its signals still mean what they had meant?",
          evidence: "interpretation",
          refs: [{ source: 8 }],
          limit:
            "The article does not discuss Napoleon or war in this sense; applying it to him is this lesson’s inference. War is only partly predictable, and only the abstract was read.",
        },
      ],
      shadow: {
        text: "In 1812 the signals changed and the expectation did not. Britannica says he wrongly supposed the campaign would be over in thirty days. The Russians, heavily outnumbered, pulled back rather than risk all in one battle. At Smolensk, Caulaincourt reports, he questioned a Russian officer and said that honour required the Russians to give battle, after which it would be easy to make peace. At Borodino he feared that an attempt to outflank them might let them escape, ordered a frontal attack and then, far from a field hidden in smoke, was perhaps unsure how the battle stood. A decisive battle followed by terms was the pattern he knew. It had stopped being the pattern he was in.",
        evidence: "interpretation",
        refs: [
          { source: 9 },
          { source: 10 },
          { source: 12, locator: "pp. 80–81" },
          { source: 13 },
        ],
        battleSlugs: ["smolensk-1812", "borodino"],
      },
      counterCase: {
        text: "Barclay de Tolly read the same invasion as a problem of time and distance. Britannica says that the Russians pulled back rather than risk all in one battle and that at Smolensk their commanders anticipated encirclement and withdrew in the night. Caulaincourt records what Alexander had told him before the war: that defeat would not mean a dictated peace, and that Russia had room. Barclay’s was not a free choice either. Britannica adds that he stood at Smolensk partly because his junior officers threatened mutiny if he did not.",
        evidence: "fact",
        refs: [{ source: 10 }, { source: 12, locator: "pp. 5–6" }],
        commanderSlug: "barclay-de-tolly",
        battleSlugs: ["smolensk-1812"],
      },
      cost: {
        text: "A misread war is paid for by other people. Britannica calls the attack at Borodino crude, and describes fighting that seesawed along a narrow front until both sides were exhausted. The figures in the sources differ and are not given here.",
        evidence: "fact",
        refs: [{ source: 13 }],
      },
      transfer: {
        holdsWhen: [
          "The person deciding has long experience of this kind of problem, with quick and honest feedback.",
          "The situation is one they have often met, and its signals mean what they used to.",
        ],
        failsWhen: [
          "The setting has changed in ways experience does not cover: scale, distance, or an opponent who will not play the expected game.",
          "The only evidence for the judgement is how sure the person feels.",
        ],
        questions: [
          "How often have you had this exact kind of decision, and how soon did you learn whether you were right?",
          "What has changed since the last time your instinct on this was reliable?",
          "What preparation is your fast judgement actually resting on?",
        ],
      },
      bearsOn:
        "This lesson leans towards “the problem got harder”: the mind that read Austerlitz was reading a kind of war it knew. It does not close the question. Nothing here shows whether his judgement had also declined by 1812, and the evidence that he misread Russia is compatible with both answers.",
      questions: [
        {
          prompt:
            "Beyond judging by eye, what does Clausewitz say coup d’œil came to mean?",
          choices: [
            "Reliance on a commander’s luck.",
            "The rapid discovery of a truth that others would see only after long reflection, or not at all.",
            "The ability to memorise a map.",
          ],
          answer: 1,
          explanation:
            "Clausewitz says the term came to refer more often to the mental eye than the physical one.",
        },
        {
          prompt:
            "What had Napoleon done on 21 November 1805 that matters to the fifteen-minute wait?",
          choices: [
            "He had reconnoitred the ground that became the battlefield.",
            "He had agreed an armistice with Austria.",
            "He had sent Soult away to Vienna.",
          ],
          answer: 0,
          explanation:
            "The judgement on the morning of the battle rested on knowledge of the ground gained eleven days earlier.",
        },
        {
          prompt:
            "On Kahneman and Klein’s account, what is not a reliable indicator of the accuracy of an intuitive judgement?",
          choices: [
            "The predictability of the environment.",
            "The person’s opportunity to learn its regularities.",
            "How the judgement feels to the person making it.",
          ],
          answer: 2,
          explanation:
            "The first two are the conditions they say to assess. Subjective experience is the one they warn against.",
        },
      ],
      sourceCheck: {
        question: "How good was Napoleon’s memory for people?",
        witnesses: [
          {
            label: "Chaptal, his minister",
            claim:
              "Questioning an old acquaintance at Malmaison, he remembered every name from his youth at Valence.",
          },
          {
            label: "Wellington, reported by Stanhope",
            claim:
              "Soldiers singled out at reviews were read from a list that Lobau prepared, and the looseness of Napoleon’s writings makes his memory doubtful.",
          },
        ],
        prompt: "What is the strongest way to weigh these?",
        options: [
          {
            text: "Accept Chaptal, because he knew Napoleon personally.",
            feedback:
              "His closeness counts, but he describes one occasion about Napoleon’s own youth. That does not tell us how soldiers came to be named at reviews.",
          },
          {
            text: "Accept Wellington, because he explains how the trick was done.",
            feedback:
              "It is a specific claim, but it comes from an opponent, at second hand, and he does not say how he knew it.",
          },
          {
            text: "Treat them as claims about different things, and keep each at the weight its witness can bear.",
            feedback:
              "Remembering people from one’s youth and calling out soldiers at parade are separate abilities. Both accounts could be true.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Name a decision in your own field that felt obvious and turned out right. Would the same feeling have been reliable in a new setting?",
        guidance:
          "Use the two conditions from Kahneman and Klein. Separate how predictable the situation was from how many chances you had to learn it, and set aside how sure you felt.",
      },
      sources: [
        s.clausewitz,
        s.timeline,
        s.chaptal,
        s.corsican,
        s.rose,
        s.italy,
        s.forces,
        s.klein,
        s.kahnemanKlein,
        s.russia,
        s.smolensk,
        s.stanhope,
        s.caulaincourt,
        s.borodino,
      ],
    },
    {
      slug: "plan-for-being-wrong",
      title: "Plans that survive error",
      part: "Judgement",
      themes: ["judgement", "organisation"],
      claim:
        "When the situation cannot be known in advance, an organisation built to absorb a wrong assumption is worth more than a correct prediction.",
      moment: {
        text: "On the morning of 13 October 1806 Napoleon wrote to Murat: “At last the veil is torn; the enemy have begun their retreat towards Magdeburg.” That afternoon he rode up to the heights above Jena and saw Prussian camps. By the account of the 1911 Britannica he concluded from all his reports that the whole Prussian army was in front of him, and he ordered his forces to concentrate on Jena, marching all night if need be. Six hours earlier that would have been true. The Prussian main body had already begun to move away to the north.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "p. 245" },
          { source: 1, locator: "§ 16" },
        ],
      },
      episodes: [
        {
          title: "Ulm: uncertain and spread out",
          text: "In 1805 Mack waited near Ulm, expecting Napoleon to come through the Black Forest with far fewer troops than he had. Instead the French crossed the Rhine, wheeled south and were across the Danube behind him before he knew it. The manoeuvre was not as clean as it later looked. Britannica says that after crossing the Danube Napoleon was uncertain of the Austrians’ latest positions, so he extended his front along the Lech and detached a corps towards Munich in case the Russians appeared, and that the encirclement was marked by bad weather, short supplies and clumsiness among some of his subordinates. The wide net caught Mack anyway. It did not depend on knowing exactly where he was.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 2 }],
          battleSlugs: ["ulm"],
        },
        {
          title: "Jena and Auerstedt: the error forgiven",
          text: "On 14 October 1806 Napoleon struck at Jena with only part of his army and beat what he took to be the main enemy. It was Hohenlohe’s flank force. Thirteen miles to the north, at Auerstedt, Davout’s single corps, marching on orders to come down on the Prussian rear, ran into the main army under Brunswick and held for six hours until the Prussian attack gave way. Britannica says the Prussians had not yet adopted the divisional system and that Brunswick spent his superior strength in piecemeal attacks. The commander had the wrong picture, and his plan still produced a double victory, because each corps was built to fight alone for a day.",
          evidence: "fact",
          refs: [
            { source: 2 },
            { source: 4 },
            { source: 1, locator: "§§ 17–18" },
            { source: 6 },
          ],
          battleSlugs: ["jena-auerstedt"],
        },
        {
          title: "Marengo: the error nearly fatal",
          text: "Six years earlier the same habit almost cost him everything. Britannica says that in June 1800, mistakenly believing Melas to be at Turin, Bonaparte weakened his army by sending out detachments to find the enemy. Melas came out of Alessandria on the morning of 14 June against a dispersed French force, and it was about eleven before Bonaparte, some way off, understood that he faced the main Austrian army. Of the two detachments only one received its recall: Boudet’s division, with Desaix, turned back at one in the afternoon on a frantic message and reached the field between four and five. Nothing in the arrangements guaranteed that. The margin was one message.",
          evidence: "fact",
          refs: [{ source: 5 }],
          battleSlugs: ["marengo"],
        },
      ],
      witnesses: [
        {
          who: "Napoleon, in his orders of October 1806",
          stake:
            "Written at the time to subordinates who had to act on them, so more reliable than his later accounts, though compiled by an editor.",
          says: "He writes to Marshal Soult that he hopes for a battle, and that whatever the enemy does he has an answer: delighted if attacked, ready to attack, and in front of them if they turn away.",
          refs: [{ source: 0, locator: "p. 242" }],
        },
        {
          who: "The 1911 Britannica on the Napoleonic campaigns",
          stake:
            "Soldierly narrative drawn from the general staff histories, and more interested in method than in reputation.",
          says: "It says that on the morning of the 13th the reports only partly cleared up the situation, and that the real truth was very different from what he supposed.",
          refs: [{ source: 1, locator: "§ 16" }],
        },
        {
          who: "Jean Linden",
          stake: "Writing an admiring study of Davout in a Napoleonic review.",
          says: "He says that on the 12th Napoleon did not know the exact position of the Prussian forces, and asked his commanders to look for information.",
          refs: [{ source: 6 }],
        },
        {
          who: "Oskar Criste, 1897",
          stake:
            "An Austrian biographer citing the war archive, and defending an Austrian staff officer.",
          says: "He says Kutuzov altered Weyrother’s excellent dispositions at Austerlitz, and that Weyrother, constantly ill, lacked the energy to insist on them.",
          refs: [{ source: 8 }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, the corps system looks like insurance. In the days before Jena Napoleon could not know where the main Prussian force was, and he knew that he did not know: his letter to Soult lists what he will do in each case. The orders of that night gave Davout a task and left the choice of road to him. A corps with its own staff, services and cavalry could fight for a day on its own. That is why a false picture did not lead to a catastrophe. The decision worth studying is the one taken years earlier to organise the army so that being wrong would be survivable.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "p. 242" },
            { source: 13 },
            { source: 6 },
          ],
        },
        {
          text: "Marengo shows the limit of the argument. There the dispersal itself was the risk. Bonaparte had detached forces in search of an enemy he had misplaced, and only one reserve division remained. A wide net works when the parts can reach each other in time. Judged on what he knew on 13 June, the detachments were a reasonable way of finding an elusive opponent; judged on how little margin they left, they were dangerous. Both judgements can stand.",
          evidence: "interpretation",
          refs: [{ source: 5 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Excessive precision in belief",
          base: "theory",
          text: "Moore and Healy distinguish three kinds of overconfidence: overestimating one’s performance, placing oneself above others, and holding beliefs with excessive precision. They report that overprecision is more persistent than the other two. A plan that depends on the enemy being in one place is a precise belief. On that view the useful question at Jena or Marengo is less how confident Napoleon felt than how narrow a range of possibilities his dispositions allowed for.",
          evidence: "interpretation",
          refs: [{ source: 10 }],
          limit:
            "These are mainly experiments on modern participants, and nobody can measure what Napoleon believed. Only the abstract was read.",
        },
        {
          mechanism: "Imagining the failure has already happened",
          base: "single study",
          text: "Prospective hindsight means explaining a future event as if it had already occurred, an idea often recommended to planners. Mitchell, Russo and Pennington found in their first experiment that temporal perspective made little difference, and that it was treating the outcome as certain that strongly changed the explanations people gave. If that holds, the useful exercise is to take a plan’s failure as settled and then explain it.",
          evidence: "interpretation",
          refs: [{ source: 11 }],
          limit:
            "This is one small research paper on how people explain events. It does not test whether such an exercise improves plans, and only the abstract was read.",
        },
      ],
      shadow: {
        text: "At Waterloo the insurance had run out. Houssaye writes that neither Napoleon nor Soult expected the Prussians on the field, since they judged that the French were rid of them for many days, and that Soult regretted the detachment of Grouchy with so large a force. Napoleon said on St Helena that when he quitted Quatre Bras he ought to have left only a small force to follow Blücher and taken all the rest with him. In 1806 a wrong belief about the enemy had been absorbed by a corps that could stand alone. In 1815 the same kind of belief met a detached force that did not arrive, and nothing absorbed it.",
        evidence: "interpretation",
        refs: [
          { source: 9, locator: "pp. 163–164" },
          { source: 7, locator: "pp. 188–189" },
        ],
        battleSlugs: ["waterloo"],
      },
      counterCase: {
        text: "The allied plan at Austerlitz was the opposite kind of plan: precise, written and dependent on several columns doing what it said. The Fondation’s timeline shows Buxhöwden and Langeron leaving the Pratzen heights to support the attacks at Telnitz and Sokolnitz, and Kutuzov throwing in all his troops to recover what was abandoned. Who was responsible is disputed. Criste says Kutuzov altered Weyrother’s dispositions, and the site’s study records Russian officers blaming Weyrother. Whichever is right, once the movement was under way there was little in the allied arrangement that could absorb a mistake.",
        evidence: "interpretation",
        refs: [{ source: 12 }, { source: 8 }],
        battleSlugs: ["austerlitz"],
      },
      cost: {
        text: "An error that is absorbed is absorbed by someone. At Auerstedt it was Davout’s corps, which held against the main Prussian army until, the 1911 Britannica says, its strength was nearly exhausted by midday. At Marengo it was the men of Victor and Lannes, driven back disordered across the plain for hours while the recall message travelled. A system that forgives its commander’s mistakes does so at the expense of the people closest to them.",
        evidence: "fact",
        refs: [{ source: 1, locator: "§ 18" }, { source: 5 }],
      },
      transfer: {
        holdsWhen: [
          "The facts that matter cannot be known before action must be taken.",
          "Parts of the organisation can act alone for long enough to be reached by help.",
        ],
        failsWhen: [
          "Dispersing to cover every possibility leaves no part strong enough to survive contact.",
          "The situation is predictable and a precise plan would simply be better.",
        ],
        questions: [
          "What is your plan assuming that you have not checked?",
          "If that assumption is wrong, which team absorbs the error, and can it?",
          "Take the failure of this plan as settled. What is the most likely explanation?",
        ],
      },
      bearsOn:
        "The system forgave him in 1806 and did not in 1815. That may be a question of margin: better opponents, a smaller and less practised army, fewer commanders able to stand alone. Or it may be that the same habit of assumption went on unchecked after success had taught him it was safe. This lesson cannot separate those, but it shows that the habit itself did not change.",
      questions: [
        {
          prompt:
            "What did Napoleon conclude on the afternoon of 13 October 1806, according to the 1911 Britannica?",
          choices: [
            "That the whole Prussian army was in front of him at Jena.",
            "That the Prussians had already retreated beyond the Elbe.",
            "That the main Prussian army was at Auerstedt.",
          ],
          answer: 0,
          explanation:
            "The main body had begun to move north that morning, which is why Davout met it at Auerstedt the next day.",
        },
        {
          prompt:
            "Why did Bonaparte’s army fight at a disadvantage on the morning of Marengo?",
          choices: [
            "He had been wounded the day before.",
            "He believed Melas was at Turin and had sent detachments away.",
            "His guns had been lost crossing the Alps.",
          ],
          answer: 1,
          explanation:
            "Britannica says the mistaken belief led him to weaken the army by sending out detachments to find the enemy.",
        },
        {
          prompt: "What did Moore and Healy report about overprecision?",
          choices: [
            "It disappears on difficult tasks.",
            "It is the rarest form of overconfidence.",
            "It is more persistent than the other two kinds of overconfidence.",
          ],
          answer: 2,
          explanation:
            "The lesson uses this to ask how narrow a range of possibilities a plan allows for.",
        },
      ],
      sourceCheck: {
        question:
          "Why did Bernadotte’s corps not march with Davout on 14 October 1806?",
        witnesses: [
          {
            label: "The 1911 Britannica",
            claim:
              "Bernadotte had neglected to keep the emperor informed, concluded that he had missed an order for Dornburg, and marched there to conceal his error.",
          },
          {
            label: "Jean Linden, Revue du Souvenir Napoléonien",
            claim:
              "Davout told Bernadotte his instructions were to join him or to go to Dornburg as previously indicated, and Bernadotte chose Dornburg.",
          },
        ],
        prompt: "What should a careful reader conclude?",
        options: [
          {
            text: "Bernadotte deliberately betrayed Davout.",
            feedback:
              "Neither account says that. One describes a mistake being concealed, the other a choice between instructions.",
          },
          {
            text: "He went to Dornburg, and his motive is an interpretation that the two accounts make differently.",
            feedback:
              "They agree on the movement. The site’s study records that his conduct remains disputed, and motive is the hardest thing to recover.",
            best: true,
          },
          {
            text: "Linden is more reliable, because Davout is his subject.",
            feedback:
              "Writing about Davout may give him detail, but it also gives him a reason to see Davout’s side.",
          },
        ],
        battleSlug: "jena-auerstedt",
      },
      seminar: {
        prompt:
          "Describe a plan you know that survived a serious wrong assumption, and one that did not. What was different about how each was organised?",
        guidance:
          "Compare Jena with Marengo. Ask who could act without new orders, how far apart the parts were, and who carried the cost of the mistake.",
      },
      sources: [
        s.corsican,
        s.campaigns,
        s.jena,
        s.coalitions,
        s.jenaCampaign,
        s.marengoBattle,
        s.linden,
        s.gourgaud,
        s.criste,
        s.houssaye,
        s.mooreHealy,
        s.mitchell,
        s.timeline,
        s.forces,
      ],
    },
    {
      slug: "tempo-and-the-decisive-point",
      title: "Speed, and what it is spent on",
      part: "Judgement",
      themes: ["judgement", "restraint"],
      claim:
        "When speed concentrates force at the point that matters it can outweigh numbers, and whatever it buys is paid for by the people who march.",
      moment: {
        text: "At the end of July 1796 reports reached Bonaparte one after another. Masséna had been driven back, the enemy had appeared near Verona, a French general had been beaten at Salo, and the Austrians were in Brescia on his line of communication. He was besieging Mantua, the prize of the campaign, and its fall was thought to be close. He ordered the siege raised, told Sérurier to burn the siege train if necessary, and gathered everything he had in a central position.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "“La manoeuvre de Castiglione”" },
          { source: 1 },
        ],
      },
      episodes: [
        {
          title: "Montenotte: at the hinge",
          text: "In April 1796, when two attacks forced his hand, Bonaparte left the brigade on the Genoa side to give ground and win time, and threw everything he could against d’Argenteau’s detachment at Montenotte, moving his divisions over the mountains by night. The point of the exercise was to be stronger in one place for one day than the enemy could be, however his total numbers compared.",
          evidence: "fact",
          refs: [{ source: 2, locator: "“Les opérations”" }],
          battleSlugs: ["montenotte"],
        },
        {
          title: "Castiglione: what was given up",
          text: "Having raised the siege, he left rearguards to hold Wurmser on the Mincio and took his main force against Quasdanovich, who was scattered and was beaten at Lonato and Salo. Then he brought it all back against Wurmser and defeated him at Castiglione on 5 August. Britannica attributes the unexpected success both to the sacrifice of the investment of Mantua and to the extraordinarily hard marching his strategy demanded. The Fondation’s article, which calls Castiglione the perfect type of a Napoleonic battle, adds that the victorious army was worn out by eight days of excessive marches and could not pursue.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "“La manoeuvre de Castiglione”" },
            { source: 1 },
          ],
          battleSlugs: ["castiglione"],
        },
        {
          title: "The Six Days, February 1814",
          text: "Eighteen years later the method was still working. Leaving a force to contain Schwarzenberg, Napoleon marched against the flank of Blücher’s army, whose main column was strung out over more than forty miles. Between 10 and 14 February he struck its corps in turn at Champaubert, Montmirail, Château-Thierry and Vauchamps. Britannica says that an inferior force scattered a far larger one, and then adds that Blücher had rallied and been reinforced within days, and that Napoleon had spent himself and his troops to obtain only a postponement of defeat.",
          evidence: "fact",
          refs: [{ source: 3 }],
          battleSlugs: ["six-days-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Bonaparte at Cherasco, April 1796",
          stake:
            "A general addressing his troops and, through the press, the government.",
          says: "He tells his soldiers they have made forced marches without shoes and bivouacked without brandy and often without bread. It is praise, and it is also a record of what speed cost.",
          refs: [{ source: 2, locator: "text of the proclamation" }],
        },
        {
          who: "The Revue du Souvenir Napoléonien on 1796",
          stake:
            "Based on a tactical course of 1913, from the high point of French study of Napoleon, and admiring in tone.",
          says: "It treats Castiglione as a model, and still records that the army could not pursue.",
          refs: [{ source: 0, locator: "“La manoeuvre de Castiglione”" }],
        },
        {
          who: "Wellington, as Earl Stanhope records him",
          stake:
            "His opponent, reported at second hand, and a general proud of his own defensive campaigns.",
          says: "On the campaign of 1814 he says: “The study of it has given me a greater idea of his genius than any other.” But, he adds, “he wanted patience.”",
          refs: [{ source: 7, locator: "p. 8" }],
        },
        {
          who: "Chaptal",
          stake:
            "Once his minister, describing the man at work in Paris and not on campaign.",
          says: "He says Napoleon kept no rule for meals or sleep: sometimes he slept eight or ten hours, and sometimes he had hardly gone to bed before he rose and worked all night.",
          refs: [{ source: 8, locator: "pp. 328–329" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, giving up the siege of Mantua was a real sacrifice. Its fall had seemed near, and the siege train might have to be burned. The alternative was to keep the prize and let two converging armies choose the moment. He preferred a known loss to an unknown danger, and that is a sound pattern: speed had value because he had first decided what he was willing to abandon in order to be concentrated. Tempo without that choice would only have been hurry.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "“La manoeuvre de Castiglione”" },
            { source: 1 },
          ],
        },
        {
          text: "The Six Days are the hardest test of the idea. As operations they were brilliant, and Wellington thought so. As strategy they answered the wrong question: Blücher was reinforced within days and the allies had more armies than Napoleon had time. Speed can decide the point it is applied to. It cannot decide whether that point was the one that mattered, and by 1814 no point within his reach could end the war.",
          evidence: "interpretation",
          refs: [{ source: 3 }, { source: 7, locator: "p. 8" }],
        },
      ],
      psychologist: [
        {
          mechanism: "Decision-making when short of sleep",
          base: "review",
          text: "Harrison and Horne review research on sleep deprivation and say it particularly impairs decisions involving the unexpected, innovation, revising plans, competing distraction and effective communication, while complex rule-based tasks hold up in the short term. They name military commanders among those affected. That is why the famous claim that Napoleon needed only a few hours’ sleep matters. Chaptal, who watched him, describes something irregular rather than ascetic: sometimes eight or ten hours, sometimes none. So the claim is unproven, and the research does not tell us what sleep did to any particular decision.",
          evidence: "interpretation",
          refs: [{ source: 9 }, { source: 8, locator: "pp. 328–329" }],
          limit:
            "No source read here measures his sleep on campaign or links it to a decision, and Chaptal describes him in Paris. Only the abstract of the review was read.",
        },
      ],
      shadow: {
        text: "In the autumn of 1813 the method met an enemy who had studied it. Britannica calls that campaign the worst conceived and most disastrous of his career, tied as it was to fortresses on the Elbe. The allies had agreed to avoid battle with Napoleon and attack his subordinates, so a rapid march towards one army simply found another advancing somewhere else. Houdecek says that after the first phase of the campaign the French army was exhausted by marches and counter-marches. Speed needs something to catch.",
        evidence: "interpretation",
        refs: [{ source: 5 }, { source: 6 }],
        battleSlugs: ["dresden", "leipzig"],
      },
      counterCase: {
        text: "Kutuzov in 1812 made slowness his method. After Moscow he stopped at Tarutino, rested his men, gathered winter clothing and organised the partisans. Ganière records that Alexander, poorly informed, reproached him for inaction, and that he answered that the French were now in effect prisoners of their victory. On the retreat, Britannica says, he declined to bring on a general engagement at Krasnoe. Slowness is not a virtue in itself; his was chosen against an enemy whose system needed a quick result.",
        evidence: "interpretation",
        refs: [{ source: 11 }, { source: 12 }, { source: 4 }],
        commanderSlug: "mikhail-kutuzov",
        battleSlugs: ["maloyaroslavets"],
      },
      cost: {
        text: "Caulaincourt saw what the marches of June 1812 did. Rapid movement without stores consumed everything along the way; the vanguard ate well, the rest went hungry; thousands of horses died from exhaustion and cold rain, and young soldiers of the Guard died on the road of fatigue and hunger, pushed to match veterans. Britannica explains the logic behind it: the method relied on pillage and forced requisition, and so it fell on whoever lived along the road as well as on those who marched.",
        evidence: "fact",
        refs: [{ source: 10, locator: "pp. 49–50" }, { source: 4 }],
      },
      transfer: {
        holdsWhen: [
          "Moving first lets you be strong at a point that truly decides the matter.",
          "You have decided in advance what you will give up in order to move.",
        ],
        failsWhen: [
          "The other side can decline the contest and simply wait.",
          "The people doing the work are already exhausted, so that speed consumes what it was meant to protect.",
        ],
        questions: [
          "What are you prepared to abandon in order to move faster?",
          "If you win this race, does it settle anything?",
          "Who is carrying the cost of the pace, and for how long can they carry it?",
        ],
      },
      bearsOn:
        "This is the strongest evidence in the volume so far against simple decline. Wellington, who had reason not to flatter him, rated the 1814 campaign above all his others. The operational skill was intact nearly twenty years on. What had changed was the size of the enemy, the state of his army and whether any victory could still matter, which points towards “the problem got harder”.",
      questions: [
        {
          prompt:
            "What did Bonaparte give up in order to concentrate before Castiglione?",
          choices: [
            "The siege of Mantua, with its siege train at risk.",
            "His line of communication through Brescia.",
            "Masséna’s division.",
          ],
          answer: 0,
          explanation:
            "He ordered the siege raised and told Sérurier to burn the train if necessary.",
        },
        {
          prompt: "What does Chaptal say about Napoleon’s sleep?",
          choices: [
            "He never slept more than four hours.",
            "He kept no rule: sometimes eight or ten hours, sometimes hardly any.",
            "He slept mainly during the day.",
          ],
          answer: 1,
          explanation:
            "Chaptal describes irregularity, which is why the lesson leaves the popular claim unproven.",
        },
        {
          prompt: "What was the allied answer to Napoleon’s speed in 1813?",
          choices: [
            "To concentrate all their armies at Dresden at once.",
            "To retreat to the Rhine.",
            "To avoid battle with him and attack his subordinates.",
          ],
          answer: 2,
          explanation:
            "An opponent who declines the contest takes away what speed is for.",
        },
      ],
      sourceCheck: {
        question: "Was the Six Days a success?",
        witnesses: [
          {
            label: "Wellington, reported by Stanhope",
            claim:
              "The 1814 campaign gave him a greater idea of Napoleon’s genius than any other, though he wanted patience.",
          },
          {
            label: "Britannica",
            claim:
              "An inferior force scattered a larger one, and yet Blücher had rallied and been reinforced within days, so that it won only a postponement of defeat.",
          },
        ],
        prompt: "How should these be read together?",
        options: [
          {
            text: "Wellington is right, because he was a great general himself.",
            feedback:
              "His professional admiration is evidence about the operations. It does not show that they could have changed the war’s result.",
          },
          {
            text: "Britannica is right, so the campaign was a failure of generalship.",
            feedback:
              "Britannica’s point is about what the victories achieved. It does not say they were badly conducted.",
          },
          {
            text: "They are judging different things: operational skill, and what that skill could still achieve.",
            feedback:
              "Separating those two questions is the point of the lesson, and it bears directly on “worse or harder?”.",
            best: true,
          },
        ],
        battleSlug: "six-days-campaign",
      },
      seminar: {
        prompt:
          "Think of an organisation that moved fast and won a race that turned out not to matter. What should it have asked first?",
        guidance:
          "Compare Castiglione with the Six Days. Look at what was given up in order to move, and whether the point reached actually decided anything.",
      },
      sources: [
        s.tolentino,
        s.italy,
        s.nice,
        s.france1814,
        s.forces,
        s.autumn1813,
        s.collapse,
        s.stanhope,
        s.chaptal,
        s.harrisonHorne,
        s.caulaincourt,
        s.ganiere,
        s.retreat,
      ],
    },
    {
      slug: "be-seen-where-it-is-hardest",
      title: "Presence: being seen where it is hardest",
      part: "Moving people",
      themes: ["motivation", "communication"],
      claim:
        "Visible shared risk builds authority when followers read it as theirs, and for that very reason it is also worth staging.",
      moment: {
        text: "On the night of 1 December 1805, the eve of Austerlitz, Napoleon went round the bivouacs. In the account Johnston compiled he went on foot and incognito and was recognised at once: torches of straw went up on poles, the army stood and cheered, and an old grenadier promised him that he need only watch tomorrow. Back in a roofless straw hut the grenadiers had built for him he is reported to have said: “This is the most glorious night of my life; but I regret that so many of these brave fellows will be lost.”",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 217–218" }],
      },
      episodes: [
        {
          title: "Lodi and the nickname",
          text: "At the bridge of Lodi on 10 May 1796 a massed column ordered across stalled under fire. Britannica says that Bonaparte, Berthier and Masséna reinvigorated the advance, and that his men named him the Little Corporal in recognition of his personal courage. His own report, as Johnston prints it, says that the generals Berthier, Masséna and Lannes rushed to the front, and leaves himself out; that evening, the same compilation notes, the grenadiers acclaimed him as the little corporal. Britannica adds that his reports turned a small engagement into an epic. The nickname is the thing to notice. It places a general among his soldiers, and it came from them.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 0, locator: "p. 27" }, { source: 3 }],
          battleSlugs: ["lodi"],
        },
        {
          title: "Arcole: when they would not follow",
          text: "Six months later the same gesture failed. At the bridge of Arcole on 15 November 1796 Bonaparte tried to lead the attack himself and could not get his troops to follow. It is the moment Gros later painted as a triumph. He told Carnot soon afterwards that Lannes, twice wounded and in bed, got up when he heard the general had gone to the head of the column, and was struck down at the bridge. Two aides-de-camp, Elliot and Muiron, were killed. Being seen did not always work, and it was not free.",
          evidence: "fact",
          refs: [{ source: 4 }, { source: 0, locator: "pp. 49–50" }],
          battleSlugs: ["arcole"],
        },
        {
          title: "Jaffa: the plague hospital",
          text: "On 11 March 1799 Bonaparte visited the plague hospital at Jaffa with some staff officers and the chief physician, Desgenettes. Ledoux-Lebard says that he stayed an hour and a half comforting the sick, and that when Desgenettes tried to cut the visit short he answered that he was only doing his duty as general-in-chief. Five years later Gros painted it. Between sketch and canvas, probably on Denon’s advice, the scene was changed in ways less faithful to the facts: a dark room became an open hall, and the general no longer helps to lift a sick man. The Fondation calls the finished work propaganda, meant to answer the rumour that he had poisoned his plague patients, and it compares his touch to the healing touch of kings.",
          evidence: "fact",
          refs: [{ source: 5 }, { source: 6 }],
          battleSlugs: ["acre"],
        },
        {
          title: "Krasnoe, November 1812",
          text: "Sergeant Bourgogne of the Guard remembers the fight near Krasnoe during the retreat from Moscow. The Emperor himself, on foot, walked with firm steps as if on parade and placed himself in the middle of the field opposite the enemy’s batteries. The Guard came under artillery fire at once, and the officer just ahead of Bourgogne was the first to fall. Thirteen years after Jaffa, with the army dissolving, the habit was still there.",
          evidence: "fact",
          refs: [{ source: 8, locator: "ch. VI" }],
          battleSlugs: [],
          campaignSlugs: ["russian-campaign-of-1812"],
        },
      ],
      witnesses: [
        {
          who: "Johnston’s diary of Napoleon",
          stake:
            "A compilation that mixes his letters with reports of what he said, and so shows the scene as admirers preserved it.",
          says: "He has Napoleon go out incognito on the eve of Austerlitz and be recognised at once.",
          refs: [{ source: 0, locator: "pp. 217–218" }],
        },
        {
          who: "Baron de Marbot",
          stake:
            "A young staff officer who was there, writing long afterwards.",
          says: "He says that the chasseurs of the escort lit torches of pine and straw to see the way through the fog, and that the troops, recognising the staff, took up the torches all along the line.",
          refs: [{ source: 1, locator: "pp. 196–197" }],
        },
        {
          who: "Guy Ledoux-Lebard",
          stake:
            "Writing in a Napoleonic review, and careful about what the painter altered.",
          says: "He records witnesses to the visit and also that the canvas was made less faithful to them, and he thinks the Emperor saw the painting chiefly as a means of increasing his popularity.",
          refs: [{ source: 5 }],
        },
        {
          who: "Wellington, as Earl Stanhope records him",
          stake: "His opponent, reported at second hand, and generous here.",
          says: "He says that Napoleon’s presence on the field made the difference of forty thousand men.",
          refs: [{ source: 11, locator: "p. 9" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, a commander at the head of a wavering column is making a real trade. The gain is immediate and local: a stalled attack may move. The risk falls on the whole enterprise, because an army of that kind had no substitute for the man giving the orders. Bonaparte was badly wounded in the thigh at Toulon and hit again later, and after Eylau he wrote that he had been rather exposed to artillery fire, “but it was necessary.” Whether it was necessary each time cannot be known. It was a repeated decision to spend the risk of his own death on the moral state of the troops.",
          evidence: "interpretation",
          refs: [{ source: 14 }, { source: 0, locator: "p. 263" }],
        },
        {
          text: "Staged and sincere are not opposites. He did go into the plague hospital, at real risk, and he did later have the visit painted for political ends. The first made the second possible. A commander who is only ever seen at the moment of a good picture will eventually be found out by the soldiers, who were there. The picture could work on Paris because the army had some reason to believe it.",
          evidence: "interpretation",
          refs: [{ source: 5 }, { source: 6 }],
        },
      ],
      psychologist: [
        {
          mechanism: "The leader as one of us",
          base: "meta-analysis",
          text: "Research on social identity asks how far a leader is seen to embody what a group shares. Steffens and colleagues, combining 128 sets of results, report a moderate-to-large effect of this kind of prototypicality on how leaders are evaluated and on behaviour. The effect is stronger when the leader represents the group’s ideal rather than its average member. That is a useful way of reading the name Little Corporal: he was no ordinary soldier, and what the name claimed was that he stood for what soldiers admired.",
          evidence: "interpretation",
          refs: [{ source: 12 }],
          limit:
            "These studies concern modern groups, and no one surveyed the Army of Italy. The nickname is suggestive only. Only the abstract was read.",
        },
        {
          mechanism: "Moods spreading through a group",
          base: "single study",
          text: "Barsade’s laboratory study of group decision-making found that a confederate’s mood spread among group members, and that positive contagion improved cooperation, reduced conflict and raised perceived performance. The torch-lit night at Austerlitz looks like the same process on a vast scale.",
          evidence: "interpretation",
          refs: [{ source: 13 }],
          limit:
            "Barsade studied small groups in a laboratory. Stretching that to an army the night before a battle is this lesson’s inference, and only the abstract was read.",
        },
      ],
      shadow: {
        text: "The same man who touched the sick at Jaffa in March came back through the town in May, on the retreat from Acre, and left behind men who had the plague; Lentz records that he went on being criticised for it. Five years later the canvas showed only the first visit. Presence could also be selective in another way. At Borodino, Britannica says, he stayed distant from a field hidden by smoke, and Chaptal says that most of his generals approached him trembling. The soldiers’ emperor could be very far away from the men who had to carry out his orders.",
        evidence: "interpretation",
        refs: [
          { source: 7 },
          { source: 5 },
          { source: 9 },
          { source: 10, locator: "p. 247" },
        ],
        battleSlugs: ["borodino"],
      },
      counterCase: {
        text: "Wellington offers the opposite style. Asked about harangues, he told Stanhope that a speech could not be heard by more than a thousand men, that proclamations were meant for Paris, and that the British army was composed of “the scum of the earth”, adding that it was only wonderful they could make so much of them afterwards. Stanhope also records Lord Anglesey being struck while riding alongside him at Waterloo: he was in danger without making anything of it. Soldiers can trust a commander who does not flatter them, if they believe he will not waste them. It is a different bargain, and it held.",
        evidence: "interpretation",
        refs: [{ source: 11, locator: "pp. 13–14, 183–185" }],
        commanderSlug: "arthur-wellesley",
        battleSlugs: ["waterloo"],
      },
      cost: {
        text: "A leader who stands in the open draws fire on those beside him. Muiron and Elliot died at Arcole. At Krasnoe a shot took off the legs of the officer in front of Bourgogne. The soldiers who cheered on the eve of Austerlitz paid for the next day, as Napoleon’s own reported words acknowledge.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 49–50, 218" }, { source: 8 }],
      },
      transfer: {
        holdsWhen: [
          "The people you lead can see that you are bearing some of what you ask of them.",
          "Your record gives them reason to believe the gesture is more than a gesture.",
        ],
        failsWhen: [
          "The gesture costs you nothing, or is visibly arranged for an audience elsewhere.",
          "Those who pay for your being seen are the people standing next to you.",
        ],
        questions: [
          "Where is the hardest place in your organisation right now, and when were you last there?",
          "Who sees your presence, and who only hears about it?",
          "What would be left of this gesture if no one recorded it?",
        ],
      },
      bearsOn:
        "Personal courage does not look like the thing that declined. Bourgogne shows it intact in 1812. What changed was what it could buy: a gesture that could start a stalled column at Lodi could not reverse an army’s dissolution. That leans towards “the problem got harder”, though the distance from his generals suggests something had hardened in the man as well.",
      questions: [
        {
          prompt:
            "What happened when Bonaparte tried to lead the attack at Arcole on 15 November 1796?",
          choices: [
            "He carried the bridge and broke the Austrian line.",
            "He could not get his troops to follow him.",
            "He was wounded and carried from the field.",
          ],
          answer: 1,
          explanation:
            "The Fondation’s account says so plainly, and it is the moment Gros made into a triumph.",
        },
        {
          prompt: "What does the lesson say about the Gros painting of Jaffa?",
          choices: [
            "It was altered from the witnesses’ account and used for political ends, though the visit itself took place.",
            "It shows a visit that never happened.",
            "It is an exact record of what Desgenettes saw.",
          ],
          answer: 0,
          explanation:
            "Staged and sincere are not opposites here: the visit was real and the image was shaped.",
        },
        {
          prompt:
            "When is leader group prototypicality stronger, according to Steffens and colleagues?",
          choices: [
            "When the leader is the most average member of the group.",
            "When the group is newly formed.",
            "When the leader represents the group’s ideal rather than its average member.",
          ],
          answer: 2,
          explanation:
            "That helps explain how a general could be a “little corporal” without being an ordinary soldier.",
        },
      ],
      sourceCheck: {
        question: "Was the torch-lit night at Austerlitz arranged?",
        witnesses: [
          {
            label: "Johnston’s compilation",
            claim:
              "Napoleon went out on foot and incognito, was recognised at once, and torches of straw went up on a thousand poles.",
          },
          {
            label: "Marbot, on the staff that night",
            claim:
              "The escort lit torches of pine and straw to see through the fog, and the troops, recognising the staff, took up the torches all along the line.",
          },
        ],
        prompt: "What is the best reading?",
        options: [
          {
            text: "It was planned by Napoleon to raise morale.",
            feedback:
              "Neither account says so, and both describe the enthusiasm as spreading from the men.",
          },
          {
            text: "Both give a spontaneous spread, and differ on who lit the first torches. Marbot’s detail is the more practical.",
            feedback:
              "They agree on what matters, and Marbot was present. His ordinary explanation should make a reader cautious about the more theatrical version.",
            best: true,
          },
          {
            text: "Marbot must be right about everything, since he was there.",
            feedback:
              "Being present helps, but he wrote long afterwards. Eyewitnesses can also misremember or improve a story.",
          },
        ],
        battleSlug: "austerlitz",
      },
      seminar: {
        prompt:
          "Think of a leader whose visible gesture changed how people felt. What made it believable, and who paid for it?",
        guidance:
          "Compare Lodi with Jaffa. Separate what the people present saw from what the wider public was shown later.",
      },
      sources: [
        s.corsican,
        s.marbot,
        s.lodiBattle,
        s.lodi,
        s.arcole,
        s.gros,
        s.grosPainting,
        s.lentz,
        s.bourgogne,
        s.borodino,
        s.chaptal,
        s.stanhope,
        s.steffens,
        s.barsade,
        s.wounds,
      ],
    },
    {
      slug: "what-people-will-do-for-recognition",
      title: "What people will do for recognition",
      part: "Moving people",
      themes: ["motivation", "organisation"],
      claim:
        "Public recognition mobilises people when it is seen as fair, and loses its force once it hardens into property.",
      moment: {
        text: "In May 1802 the Council of State debated the proposed Legion of Honour. Berlier objected that it led straight to an aristocracy, and that “crosses and ribbons are the toys of a Monarchy.” Thibaudeau, who voted against it, took down the First Consul’s reply. “You are pleased to call them toys; well, it is with toys that mankind is governed.” He added that he would not say so in a speech, but that among statesmen one ought to speak freely.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 142–143" }],
      },
      episodes: [
        {
          title: "One ribbon, a narrow vote",
          text: "The law passed the Tribunat by only 58 votes to 38 on 17 May 1802, and the Corps législatif by 166 to 110 two days later. It rewarded services and virtues, civil as well as military. Before it there had been arms of honour for acts of valour, carrying a small addition to pay. Colonel Chabanier stresses what was new: one insignia honoured everyone without distinction of class, origin, rank or religion, and the promotion lists set the descendant of a royal officer beside a grenadier who signed his oath with a cross. As many rank-and-file soldiers as officers were admitted, though the higher grade almost never went to them.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 2 }],
          battleSlugs: [],
        },
        {
          title: "Careers the Revolution had opened",
          text: "He did not invent the idea. Marbot remembers a camp of the early 1790s in which his father’s favourites were Augereau, a colonel on the staff, and Lannes, a lieutenant of grenadiers in a volunteer battalion; both became marshals of the Empire. The 1911 Britannica says that the mass of the Revolutionary army gradually evolved its true leaders and obeyed them. Metternich, no friend of the system, says the marshals had for the most part been taken from the lower ranks. What Napoleon did was to give that mobility a public form, with titles and ceremony, and to make himself its source.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "p. 12" },
            { source: 4 },
            { source: 9, locator: "p. 85" },
          ],
          battleSlugs: [],
        },
        {
          title: "Being named",
          text: "Recognition worked through publicity. Before Acre in April 1799, after Junot’s men held off a far larger cavalry force at Nazareth, Bonaparte ordered a prize for the best painting of the fight, with the uniforms of the regiments shown correctly, and he ordered that the commendation be communicated to the home communes of every soldier present. Houdecek says that being mentioned in a bulletin was an honour soldiers and regiments watched for. A soldier’s village could hear his name.",
          evidence: "fact",
          refs: [{ source: 5, locator: "pp. 96–97" }, { source: 7 }],
          battleSlugs: ["acre"],
        },
        {
          title: "Davout’s corps enters Berlin",
          text: "After Auerstedt, Linden says, the Emperor chose to reward the Third Corps in particular by having it enter Berlin first, which it did on 25 October 1806. It was a cheap honour and a precise one, given to the men who had carried the heaviest load. Chaptal gives the other side of the picture: when generals distinguished themselves, he says, Napoleon usually said only that they had done their duty, and he sometimes mentioned them in the bulletins.",
          evidence: "fact",
          refs: [{ source: 6 }, { source: 8, locator: "p. 247" }],
          battleSlugs: ["jena-auerstedt"],
        },
      ],
      witnesses: [
        {
          who: "Thibaudeau",
          stake:
            "A member of the Council who voted against the Legion, and so was no flatterer, recording the argument he lost.",
          says: "He preserves both Berlier’s objection and Bonaparte’s reply, including the claim that the French have only one sentiment, honour.",
          refs: [{ source: 0, locator: "pp. 142–143" }],
        },
        {
          who: "Colonel Chabanier",
          stake:
            "An officer writing in a Napoleonic review, admiring and institutional in tone.",
          says: "He presents the Legion as the first French honour to treat everyone alike.",
          refs: [{ source: 2 }],
        },
        {
          who: "Chaptal",
          stake: "Once his minister, and bitter on this subject.",
          says: "He says Napoleon loaded his generals with fortune in the conquered lands, to create great houses at court and to bind them to his fate, and that he never heard him praise a general.",
          refs: [{ source: 8, locator: "pp. 247–248" }],
        },
        {
          who: "Metternich",
          stake:
            "His opponent, writing long afterwards, with an interest in showing the Empire rotten by 1813.",
          says: "He says the marshals had grown rich from foreign spoil and the Emperor’s calculated generosity, and objected to staking their possessions on the chances of war.",
          refs: [{ source: 9, locator: "p. 85" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the Legion was a cheap way to bind a divided country to a new regime. It cost a ribbon and a modest allowance, and it reached soldiers and civilians, old nobles and former volunteers. Chabanier says that it was meant to consolidate the mixing of all classes after years of upheaval. A government with few other sources of loyalty had every reason to try it, and the narrowness of the vote shows that its political meaning was understood at the time.",
          evidence: "interpretation",
          refs: [{ source: 2 }, { source: 1 }],
        },
        {
          text: "The difficulty lay in the higher rewards. Ribbons can be given again and again, and they still mean something if the giver is believed to be fair. Estates in conquered lands are different. They give the recipient something to lose, and Chaptal says that was partly their purpose, to tie the generals’ fortunes to the conquests. That bond holds while the conquests hold. Once defeat threatens them, the same interest points the other way.",
          evidence: "interpretation",
          refs: [{ source: 8, locator: "pp. 247–248" }],
        },
      ],
      psychologist: [
        {
          mechanism: "Rewards and intrinsic motivation",
          base: "meta-analysis",
          text: "Deci, Koestner and Ryan combined 128 studies and found that expected, tangible rewards significantly undermined free-choice intrinsic motivation, while positive feedback enhanced both free-choice behaviour and self-reported interest. The distinction is suggestive here. A public word of praise looks closer to feedback, and a large estate closer to a tangible reward, which is one way of reading why the ribbon kept its meaning while the fortunes did something else.",
          evidence: "interpretation",
          refs: [{ source: 11 }],
          limit:
            "The experiments concern tasks done by children and students, and the abstract shows that the paper drew published replies. Nobody measured a marshal’s motivation. Only the abstract was read.",
        },
        {
          mechanism: "Whether the process seems fair",
          base: "meta-analysis",
          text: "Colquitt and colleagues, reviewing 493 samples, report that the links between justice and both task performance and helpful behaviour run through the quality of the exchange: trust, commitment and the sense of being supported. That fits the case of a grenadier and an aristocrat on one promotion list. The value of such a list depends on whether people believe it reflects what was done.",
          evidence: "interpretation",
          refs: [{ source: 12 }],
          limit:
            "These are modern workplace studies, and nothing comparable exists for the Legion. Only part of the abstract could be read.",
        },
      ],
      shadow: {
        text: "By 1813, Metternich says, the marshals wished to enjoy what they had gained, and France felt the need of repose. He had reason to say so, but Britannica’s account of April 1814 points the same way. At Fontainebleau the marshals refused to follow Napoleon in a last attempt at resistance and prevailed on him to abdicate in favour of his son, and Marmont took his corps into the allied lines. Men he had raised from nothing, and made rich so that their fortunes would be tied to his, ended by telling him to stop.",
        evidence: "interpretation",
        refs: [
          { source: 9, locator: "p. 85" },
          { source: 10 },
          { source: 8, locator: "pp. 247–248" },
        ],
        battleSlugs: ["arcis-sur-aube"],
      },
      counterCase: {
        text: "Prussia after 1806 tried to build merit into the institution instead of the ruler’s favour. Under Scharnhorst’s reforms, the New International Encyclopædia says, promotion for merit was established; Britannica says Gneisenau, still a company commander at Jena, advocated promotion by merit and the end of special privileges for the higher classes. Napoleon himself forced the dismissal of the reform party in 1808, and it survived regardless. Blücher, who had retired, returned at seventy-one and was made a field marshal for Leipzig. A rule outlasts a patron, though nobody would call Prussia’s reforms complete.",
        evidence: "interpretation",
        refs: [{ source: 13 }, { source: 14 }, { source: 15 }],
        commanderSlug: "gebhard-leberecht-von-blucher",
        battleSlugs: ["leipzig"],
      },
      cost: {
        text: "Recognition is a way of getting people to accept danger. In the same speech Bonaparte praised Voltaire for calling soldiers Alexanders at five sous a day, and asked whether men could be made to fight by philosophic analysis. Metternich writes that the nation was decimated by the annual levies. A ribbon was also a price, and the men who received it were being paid in advance for what they were being asked to risk.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "p. 143" },
          { source: 9, locator: "pp. 85–86" },
        ],
      },
      transfer: {
        holdsWhen: [
          "Recognition is public, specific and believed to reflect what was actually done.",
          "It reaches people at every level, and not only those close to the leader.",
        ],
        failsWhen: [
          "Rewards become wealth or position that people then have to protect.",
          "Recognition is seen as a matter of the leader’s favour, and not of any standard.",
        ],
        questions: [
          "Who in your organisation was last publicly recognised, and could others say why?",
          "What are you giving people that they would have to protect by avoiding risk?",
          "If you left tomorrow, would your standards for recognition remain?",
        ],
      },
      bearsOn:
        "The Legion seems to have kept its meaning, while the marshals’ loyalty did not. If Chaptal is right, the second was built to depend on conquest, so that the defeat of 1814 removed its basis. That is a case where the design, not the man’s later decline, set the limit, and the design was his.",
      questions: [
        {
          prompt:
            "What did Bonaparte reply when Berlier called crosses and ribbons toys?",
          choices: [
            "That toys were beneath the dignity of a Republic.",
            "That it is with toys that mankind is governed.",
            "That the Legion would be for soldiers alone.",
          ],
          answer: 1,
          explanation:
            "Thibaudeau, who opposed the Legion, recorded the exchange in the Council of State.",
        },
        {
          prompt:
            "What was new about the Legion, in Colonel Chabanier’s account?",
          choices: [
            "One insignia honoured everyone without distinction of class, origin, rank or religion.",
            "It was limited to the officers of the Guard.",
            "It replaced all pay with honours.",
          ],
          answer: 0,
          explanation:
            "He notes that as many rank-and-file soldiers as officers were admitted, though the highest grade rarely reached them.",
        },
        {
          prompt:
            "In the Deci, Koestner and Ryan meta-analysis, what enhanced free-choice behaviour and interest?",
          choices: [
            "Expected tangible rewards.",
            "Rewards for completing a task.",
            "Positive feedback.",
          ],
          answer: 2,
          explanation:
            "That is why the lesson separates public praise from large material rewards.",
        },
      ],
      sourceCheck: {
        question:
          "Was the Legion of Honour a step towards equality or away from it?",
        witnesses: [
          {
            label: "Berlier, in Thibaudeau’s record",
            claim:
              "The proposed Order leads straight to an aristocracy, and crosses and ribbons are the toys of a Monarchy.",
          },
          {
            label: "Colonel Chabanier, Revue du Souvenir Napoléonien",
            claim:
              "For the first time in France a single insignia honoured everyone, without distinction of class, origin, rank or religion.",
          },
        ],
        prompt: "How should a historian weigh these?",
        options: [
          {
            text: "Chabanier is right, because the lists include grenadiers.",
            feedback:
              "The lists support him on who received it. They do not answer Berlier’s fear about what the Order would become.",
          },
          {
            text: "Berlier is right, because the Empire created a nobility.",
            feedback:
              "His fear has a later basis, but that is hindsight applied to a debate in 1802, and the Legion itself stayed open to the ranks.",
          },
          {
            text: "They answer different questions: who could receive it, and what an order of honour does to a republic.",
            feedback:
              "Each is partly right. Recognising that they are not disagreeing about the same thing is the first step.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Describe a reward in your own experience that lost its meaning. When did it change, and why?",
        guidance:
          "Compare the Legion with the estates given to the marshals. Ask who decided, on what evidence, and what the recipient then had to protect.",
      },
      sources: [
        s.thibaudeau,
        s.legion,
        s.chabanier,
        s.marbot,
        s.frw,
        s.corsican,
        s.linden,
        s.houdecek,
        s.chaptal,
        s.metternich,
        s.endOfWar,
        s.deci,
        s.colquitt,
        s.scharnhorst,
        s.gneisenau,
        s.blucher,
      ],
    },
    {
      slug: "words-that-win-and-words-that-spend-trust",
      title: "Words that win, and words that spend trust",
      part: "Moving people",
      themes: ["communication", "ethics"],
      claim:
        "When a leader controls what followers are told, they can shape what a situation means, and each distortion draws on a limited account of trust.",
      moment: {
        text: "At the start of December 1812, with no letters from France reaching him, Napoleon prepared the account of the retreat that would become the 29th Bulletin. Caulaincourt records his reasoning. He would tell everything: it was better that the particulars should come from him than through private letters, and full details now would soften what had to be announced later. A man who had been shaping the news for sixteen years was deciding, as a matter of calculation, to tell the truth.",
        evidence: "fact",
        refs: [{ source: 0, locator: "p. 259" }],
      },
      episodes: [
        {
          title: "Letters written to be printed",
          text: "Pierre Branda describes what happened after Montenotte and Millesimo in April 1796. French newspapers did more than report the victories. They printed the general’s letters to the Directory, often in full, so that the public read the tone and energy of the man conducting the war. The general did not merely win, Branda says; he told the story, and his letters became the first chapters of an epic in the making.",
          evidence: "fact",
          refs: [{ source: 2 }],
          battleSlugs: ["montenotte"],
        },
        {
          title: "A proclamation to Egypt",
          text: "In July 1798, after landing, Bonaparte issued an Arabic proclamation assuring Egyptians that he came as a friend to Islam and the Ottoman sultan, to punish the Mamluks and to liberate the people. Al-Jabarti, a Cairo scholar who stayed in the city, records that the French printed it and spread it to reassure the people, and he copies a second declaration from the camp at Giza saying they had come only to end Mamluk rule. The preface to the French edition of his journal concedes that the occupation’s fiscal charges were crushing and repeated.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 4 }],
          battleSlugs: ["pyramids"],
        },
        {
          title: "Austerlitz, written afterwards",
          text: "The proclamation of 3 December 1805 opens, “Well done, soldiers!” It was written after the fighting, at the château of Austerlitz. Houdecek says that Napoleon reworked the texts of his proclamations before publication so that victory would seem to have been foreseen and inevitable. Earlier that year, in April 1805, he had told his navy minister to keep the movements of the fleet secret and to see that the Dutch gazettes published that a French fleet had landed troops in Egypt. Praise for the army and planted falsehoods for the enemy came from the same desk.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "pp. 196, 218–219" },
            { source: 5 },
            { source: 12 },
          ],
          battleSlugs: ["austerlitz"],
        },
        {
          title: "The 29th Bulletin",
          text: "Le Moniteur led with it on 17 December 1812. The Fondation says that it described the debacle in relatively unambiguous terms: an army without cavalry, artillery or transport. The bulletin itself says that until 6 November the weather was perfect and the movement a complete success, and it lays the ruin on the cold that followed. Britannica’s account is that the large majority of the losses occurred before the first snow. The last line, “The health of H. M. has never been better”, was probably a warning to anyone thinking of repeating Malet’s attempted coup. It was unusually frank, and it still chose the explanation that left him least to blame.",
          evidence: "fact",
          refs: [
            { source: 6 },
            { source: 1, locator: "pp. 364–366" },
            { source: 7 },
          ],
          battleSlugs: ["berezina"],
        },
      ],
      witnesses: [
        {
          who: "Caulaincourt",
          stake:
            "Close to Napoleon on the retreat, and writing as a man who had warned against the war.",
          says: "He reports the reasoning behind the 29th Bulletin, and elsewhere says that on leaving Moscow some incident had to appear in the bulletin, at any cost, to balance a recent defeat.",
          refs: [{ source: 0, locator: "pp. 168, 259" }],
        },
        {
          who: "François Houdecek",
          stake:
            "A historian working on the Correspondance générale, with close knowledge of the documents.",
          says: "He says the bulletins were dictated by Napoleon, worked up by staff officers and read aloud across France.",
          refs: [{ source: 5 }],
        },
        {
          who: "Madame de Rémusat",
          stake:
            "A lady-in-waiting at the court, whose memoirs were published by her grandson.",
          says: "She names Maret as the “author-in-chief of the bulletins”, which sits awkwardly with the picture of Napoleon weighing every word himself.",
          refs: [{ source: 13, locator: "p. 433" }],
        },
        {
          who: "Abdurrahman al-Jabarti",
          stake:
            "A Muslim scholar in occupied Cairo, hostile to the French and also a member of their council, as the French edition notes.",
          says: "He records the proclamations as instruments meant to reassure, alongside what the French then did.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, control of the message was a serious military and political tool. The letters of 1796 built a reputation that protected a young general from a government that might otherwise have replaced him. The proclamation in Egypt tried to split the population from its rulers before a shot was fired. The false reports of 1805 aimed to mislead an enemy navy, a legitimate deception in war. The distinction that matters is who is being deceived. A lie told to the enemy costs little at home.",
          evidence: "interpretation",
          refs: [
            { source: 2 },
            { source: 3 },
            { source: 1, locator: "p. 196" },
          ],
        },
        {
          text: "The 29th Bulletin shows a commander who understood the arithmetic. Private letters would carry the news anyway, so that silence would only turn a disaster into a scandal. Publishing first let him set the terms. He was also about to reach Paris and needed the shock to be over before he arrived. On those grounds it was a good decision, made late, by someone who had left himself with little credit to draw on.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "p. 259" }, { source: 6 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Trust in leaders",
          base: "meta-analysis",
          text: "Dirks and Ferrin’s review of four decades of research estimates how trust in leadership relates to outcomes, and finds that direct leaders appear to be a particularly important referent of trust. That is a useful warning about bulletins. A soldier might trust the commander he had seen under fire and discount the printed account of the same event, without any contradiction. Trust at a distance and trust at close range are not the same thing.",
          evidence: "interpretation",
          refs: [{ source: 10 }],
          limit:
            "This is modern organisational research, and the distinction between direct and distant leaders is applied here by analogy. Only the abstract was read.",
        },
        {
          mechanism: "Repairing trust after a failure",
          base: "single study",
          text: "Kim and colleagues found, in two studies, that trust was repaired more successfully when people apologised for failures of competence and denied failures of integrity. The 29th Bulletin does neither in that form. It reports the disaster and assigns it to the weather, which avoids both apology and any admission of misjudgement.",
          evidence: "interpretation",
          refs: [{ source: 11 }],
          limit:
            "These were controlled studies of alleged violations, not an emperor’s report on a lost army. The comparison is an illustration, and only the abstract was read.",
        },
      ],
      shadow: {
        text: "Control has a way of turning inward. Caulaincourt says that as the army left Moscow some incident had to go into the bulletin, whatever the cost, to balance Murat’s defeat. An editor’s note to his memoirs adds that the 29th Bulletin itself laid a public charge against General Partouneaux that Napoleon later quietly set aside. Readers in France came to know the form well enough, as Houdecek’s phrase “menteur comme un bulletin” suggests, though he gives no source for it. A government that manages every report loses the ability to be believed when it finally has something true and terrible to say.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "pp. 168, 249" }, { source: 5 }],
        battleSlugs: ["maloyaroslavets"],
      },
      counterCase: {
        text: "Wellington thought the French proclamations “were meant for Paris”. His own report on Waterloo, dated the next day, opens with the movements of the French corps and proceeds without flourish. It names officers and units in turn, and it says that he should not do justice to his own feelings, or to Blücher and the Prussian army, if he did not attribute the successful result to the “cordial and timely assistance” he received from them. It was a document with a purpose, written by the commander who had most to gain from it. But it gave a large share of the victory to an ally in its first official telling, and that is a different use of words.",
        evidence: "interpretation",
        refs: [{ source: 9 }, { source: 8, locator: "p. 13" }],
        commanderSlug: "arthur-wellesley",
        battleSlugs: ["waterloo"],
      },
      cost: {
        text: "Those who paid were the people for whom the words were written. The French edition of al-Jabarti concedes the crushing and repeated charges laid on Egyptians who had been promised friendship. In France, families learned only from the Moniteur of 17 December what had happened to the army. A false picture is also a delay in grief.",
        evidence: "interpretation",
        refs: [{ source: 4 }, { source: 6 }],
      },
      transfer: {
        holdsWhen: [
          "The leader controls most of what people hear about the situation.",
          "People can later compare the account with what they saw or were told privately.",
        ],
        failsWhen: [
          "The message is aimed at an opponent, where deception is an accepted part of the contest.",
          "Other channels are so strong that no official account can shape the meaning at all.",
        ],
        questions: [
          "What did you last report that would look different to someone who was there?",
          "What bad news are you waiting to announce, and who already knows it?",
          "If you had to be believed tomorrow on something serious, how much credit do you have?",
        ],
      },
      bearsOn:
        "The 29th Bulletin suggests that Napoleon’s judgement of how to communicate was intact in 1812. What had worn out was his credit. Sixteen years of managing the news meant that even his most candid report arrived as one more bulletin. That is a cost he had built up himself over time, which is neither simple decline nor simply a harder problem.",
      questions: [
        {
          prompt:
            "Why, according to Caulaincourt, did Napoleon decide to tell everything in the 29th Bulletin?",
          choices: [
            "Because his marshals insisted on it.",
            "Because it was better that the news came from him than through private letters.",
            "Because Le Moniteur refused to print anything else.",
          ],
          answer: 1,
          explanation:
            "It was a calculated choice about who would frame the news first.",
        },
        {
          prompt: "What does the 29th Bulletin blame for the ruin of the army?",
          choices: [
            "The cold that set in from 7 November.",
            "Marshal Ney’s rearguard.",
            "The burning of Moscow.",
          ],
          answer: 0,
          explanation:
            "Britannica notes that most of the losses came before the first snow, which is why this choice of explanation matters.",
        },
        {
          prompt: "What did Kim and colleagues find about repairing trust?",
          choices: [
            "Denial always worked better than apology.",
            "Apology always worked better than denial.",
            "Apology worked better for competence failures, and denial for integrity failures.",
          ],
          answer: 2,
          explanation:
            "The lesson notes that the 29th Bulletin does neither, and points to the weather instead.",
        },
      ],
      sourceCheck: {
        question: "How honest was the 29th Bulletin?",
        witnesses: [
          {
            label: "The Fondation Napoléon",
            claim:
              "It described the debacle in relatively unambiguous terms: an army without cavalry, artillery or transport.",
          },
          {
            label: "The bulletin, set against Britannica",
            claim:
              "The bulletin says all went well until the cold of 7 November. Britannica says the large majority of the losses came before the first snow.",
          },
        ],
        prompt: "What is the fairest judgement?",
        options: [
          {
            text: "It was entirely truthful, as Caulaincourt reports he intended.",
            feedback:
              "It admitted the scale of the disaster, but its account of the cause is contradicted by Britannica.",
          },
          {
            text: "It was frank about the result and self-serving about the cause.",
            feedback:
              "Both are visible in the text. A document can be unusually honest for its genre and still shape the blame.",
            best: true,
          },
          {
            text: "It can be dismissed as propaganda, as all the bulletins were.",
            feedback:
              "That throws away real evidence. The admission was unusual, and it tells us what he judged could no longer be hidden.",
          },
        ],
        battleSlug: "berezina",
      },
      seminar: {
        prompt:
          "Find a public statement by an organisation about its own failure. What does it admit, and what does it blame?",
        guidance:
          "Use the 29th Bulletin as a model. Separate the description of the outcome from the explanation of its cause, and look for an independent account of each.",
      },
      sources: [
        s.caulaincourt,
        s.corsican,
        s.branda,
        s.egypt,
        s.jabarti,
        s.houdecek,
        s.bulletin29,
        s.retreat,
        s.stanhope,
        s.waterlooDespatch,
        s.dirks,
        s.kim,
        s.austerlitzPlace,
        s.remusat,
      ],
    },
    {
      slug: "delegate-the-fight",
      title: "The corps and its commanders",
      part: "Building the instrument",
      themes: ["organisation", "judgement"],
      claim:
        "Delegation works when subordinates share a doctrine, command forces able to survive alone and know the intent behind their orders.",
      moment: {
        text: "At three in the morning of 14 October 1806, Napoleon’s orders reached Marshal Davout near Naumburg. They told him what the Emperor meant to do: attack from Jena towards Weimar at first light. They told Davout to march on Apolda and fall on the enemy’s rear. And they left the choice of road to him. By half past six the head of his corps was moving, with Davout himself riding at the front of Gudin’s division.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      episodes: [
        {
          title: "Auerstedt: an order that left room",
          text: "Davout’s advance guard ran into the main Prussian army, which should have been far stronger on the ground. The 1911 Britannica says the Prussians came on at the old regulation pace while the French manoeuvred at the quick or double, reinforcing their line in time to avert disaster. Linden says that from half past ten Davout fought with no reserve left, always at the front of the fighting. Nobody was on hand to tell him what to do. He knew what the Emperor wanted, and he had a corps that could fight for a day alone. Afterwards the Emperor chose to reward that corps by letting it enter Berlin first, and Linden records that when the keys of the city were offered, Davout refused them on the ground that they belonged to someone greater.",
          evidence: "fact",
          refs: [{ source: 1, locator: "§ 18" }, { source: 0 }],
          battleSlugs: ["jena-auerstedt"],
        },
        {
          title: "Friedland: holding until the army came",
          text: "On 14 June 1807 Lannes held the Russians from three in the morning until noon, under fire from guns on the far bank of the Alle, while reinforcements came up. Napoleon reached the field at about two in the afternoon. Ganière’s account has him refusing at first to believe the numbers in front of him, congratulating Lannes on the conduct of his troops and ordering the attack that same day. A subordinate’s stubbornness had created the opportunity that the commander then used.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 4 }],
          battleSlugs: ["friedland"],
        },
        {
          title: "Aspern-Essling: holding when the plan failed",
          text: "In May 1809 Napoleon crossed the Danube below Vienna on fragile bridges, with only part of his army over. Hicks places Masséna’s corps near Aspern and Lannes’s at Essling on the morning of 21 May, facing a much larger Austrian force coming on in five columns. The French were repulsed on 22 May. It was a defeat, with the fighting around each village in the hands of the marshal commanding there. Lannes was struck in the legs by a cannonball and died nine days later.",
          evidence: "fact",
          refs: [{ source: 5 }, { source: 6 }, { source: 7 }],
          battleSlugs: ["aspern-essling"],
        },
      ],
      witnesses: [
        {
          who: "Jean Linden",
          stake: "An admiring study of Davout in a Napoleonic review.",
          says: "He describes orders that give the intention and leave the route open, and a marshal who took calculated risks all day.",
          refs: [{ source: 0 }],
        },
        {
          who: "The 1911 Britannica",
          stake:
            "A soldierly narrative that cares more about method than reputation.",
          says: "It credits French mobility at Auerstedt to their training, and not necessarily to their system.",
          refs: [{ source: 1, locator: "§ 18" }],
        },
        {
          who: "Chaptal",
          stake: "Once his minister, bitter about how generals were treated.",
          says: "He says generals learned their orders only at the moment they had to leave to carry them out.",
          refs: [{ source: 8, locator: "p. 247" }],
        },
        {
          who: "Bonaparte, in his orders",
          stake: "Written at the time, for the men who had to act on them.",
          says: "On 12 October he told Lannes what the army’s skill now consisted of: attacking everything it met, so as to beat the enemy in detail while he concentrated.",
          refs: [{ source: 11, locator: "p. 243" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the system was a bet on people. Britannica says that each corps had its own staff and services, three infantry divisions and light cavalry, and that Napoleon kept the control of a campaign to himself while allowing his corps commanders much freedom in executing his orders. That division is the important part. Davout did not choose where to fight. He chose how to do what he had been told, and at Auerstedt the difference between the two was enough to win.",
          evidence: "interpretation",
          refs: [{ source: 2 }],
        },
        {
          text: "It was also a bet that could lose. On the same day Bernadotte, whose corps might have joined Davout, marched to Dornburg, and his conduct has been disputed ever since. The freedom that let Davout stand also let another marshal be somewhere else. A system of delegation works by selecting the right people and sharing the intent, and no organisation chart can guarantee either.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 1, locator: "§ 16" }],
        },
        {
          text: "Sharing the reasoning mattered as much as issuing the order. In the days before Jena Napoleon wrote to Soult setting out what he could make of the Prussian movements and what he would do in each case, and he told Lannes what the army’s skill now consisted of. Those letters are the working equivalent of a statement of intent: a marshal who read them could guess what the Emperor would want when something unforeseen happened. It did not happen in every campaign. Where it did, it did more for independent action than any rule about who commanded what.",
          evidence: "interpretation",
          refs: [{ source: 11, locator: "pp. 242–243" }],
        },
      ],
      psychologist: [
        {
          mechanism: "Empowering leadership",
          base: "meta-analysis",
          text: "Lee, Willis and Tian, drawing on 105 samples, report positive effects of leadership that gives people authority and encouragement on performance and creativity, and that trust in the leader and a sense of empowerment carry those effects at the individual level. That fits a marshal given a task, a route and a statement of intent. It fits less well with Chaptal’s picture of generals who approached him trembling. The research asks about something Napoleon gave only in part.",
          evidence: "interpretation",
          refs: [{ source: 10 }],
          limit:
            "These are modern workplace studies, and only the abstract was read. No claim about what marshals felt can rest on them.",
        },
      ],
      shadow: {
        text: "He delegated the fight and seldom the thinking. An article on Lejeune, one of Berthier’s aides, says that strategic conception and tactical idea came from the Emperor and from him alone. Britannica says he was content to use men who had serious deficiencies when they became commanders of whole theatres. Chaptal goes further and says that he paralysed everything around him. A marshal trained to execute brilliantly inside another man’s plan had not been trained to make the plan, as 1813 would show. Chaptal’s harshest sentence is that men, in Napoleon’s eyes, were machines he believed himself destined to set in motion. He had a grievance, and the record of Davout or Lannes does not read like the record of machines. But it is a fair description of what the system asked for at the level of campaign planning.",
        evidence: "interpretation",
        refs: [{ source: 12 }, { source: 2 }, { source: 8, locator: "p. 248" }],
        battleSlugs: ["dresden"],
      },
      counterCase: {
        text: "The army Davout beat shows what delegation is measured against. Britannica says the Prussians had not adopted the divisional system and took the field in three armies under elderly commanders. The 1911 Britannica describes a staff officer, Massenbach, riding up on the 13th, claiming the authority of the king and the commander-in-chief, and persuading Hohenlohe to send his troops back to camp. An army where authority is unclear can have able officers and still not act.",
        evidence: "interpretation",
        refs: [{ source: 9 }, { source: 1, locator: "§ 16" }],
        commanderSlug: "louis-nicolas-davout",
        battleSlugs: ["jena-auerstedt"],
      },
      cost: {
        text: "Independence meant being alone when things went badly. At Auerstedt the 1911 Britannica says that by midday French strength was nearly exhausted. Lannes’s men stood for nine hours under artillery on the far bank. Lannes himself, a dyer’s apprentice who had become a marshal, died at Aspern. A corps that can hold on alone is a corps that will be asked to.",
        evidence: "fact",
        refs: [{ source: 1, locator: "§ 18" }, { source: 3 }, { source: 7 }],
      },
      transfer: {
        holdsWhen: [
          "People know the intent, and have the means to act on it without asking.",
          "You have selected and tested the people before relying on them.",
        ],
        failsWhen: [
          "People are told what to do only at the last moment, so that they cannot think ahead.",
          "The same freedom lets someone choose to be elsewhere, and nobody finds out until afterwards.",
        ],
        questions: [
          "If you were out of contact for a day, what would your team do?",
          "Do they know why, or only what?",
          "Which decisions have you kept that you could give away?",
        ],
      },
      bearsOn:
        "Delegation worked best between 1805 and 1809, when the marshals were tested and close at hand. It does not show him getting worse. It shows that the way he delegated had a limit built into it, because he kept the thinking for himself, and that limit grew more serious as the war spread.",
      questions: [
        {
          prompt:
            "What did Napoleon’s order to Davout leave to the marshal, according to Linden?",
          choices: [
            "The decision whether to fight at all.",
            "The choice of road.",
            "The command of the whole army.",
          ],
          answer: 1,
          explanation:
            "The order gave the intent and the objective, and left the route to Davout.",
        },
        {
          prompt: "What did Lannes do at Friedland before Napoleon arrived?",
          choices: [
            "He held the Russians from three in the morning until noon.",
            "He retreated to Königsberg.",
            "He took Bennigsen prisoner.",
          ],
          answer: 0,
          explanation:
            "His stand gave Napoleon time to bring up the army and attack the same day.",
        },
        {
          prompt:
            "Which pair of statements does the lesson set against each other?",
          choices: [
            "That the corps had no staff, and that they had too many.",
            "That Davout was a poor general, and that Bernadotte was a good one.",
            "That corps commanders had much freedom in execution, and that generals learned their orders only at the last moment.",
          ],
          answer: 2,
          explanation:
            "Britannica and Chaptal describe different parts of the same system.",
        },
      ],
      sourceCheck: {
        question: "How free were Napoleon’s marshals?",
        witnesses: [
          {
            label: "Britannica",
            claim:
              "He kept the control of a campaign to himself, though he allowed his corps commanders much freedom in the execution of his orders.",
          },
          {
            label: "Chaptal, his former minister",
            claim:
              "Generals learned their orders only at the moment they left to carry them out, and most of them approached him trembling.",
          },
        ],
        prompt: "What is the best way to reconcile these?",
        options: [
          {
            text: "Chaptal is unreliable, since he was a civilian minister.",
            feedback:
              "His position limits what he saw of the battlefield, but he did see how Napoleon treated generals at court and in council.",
          },
          {
            text: "They describe different things: freedom in carrying out a task, and little part in deciding it.",
            feedback:
              "That reading fits both, and it is the distinction on which this lesson and the next depend.",
            best: true,
          },
          {
            text: "Britannica must be right, because it is an encyclopedia.",
            feedback:
              "A reference work is a summary of other people’s judgements. It needs weighing like any other source.",
          },
        ],
      },
      seminar: {
        prompt:
          "Describe an order or brief that left you real room to act, and one that did not. What was different about the way each was written?",
        guidance:
          "Use Napoleon’s order to Davout as a model. Look for the statement of intent, the task, and what was left open.",
      },
      sources: [
        s.linden,
        s.campaigns,
        s.forces,
        s.polish1807,
        s.winter1807,
        s.hicks,
        s.aspern,
        s.lannes,
        s.chaptal,
        s.jenaCampaign,
        s.empowering,
        s.corsican,
        s.lejeune,
      ],
    },
    {
      slug: "a-headquarters-built-for-one-mind",
      title: "What a personal staff could and could not do",
      part: "Building the instrument",
      themes: ["organisation", "judgement"],
      claim:
        "When a headquarters is built to serve one mind, it extends that mind’s reach and leaves little that can think without it.",
      moment: {
        text: "At Vilna in July 1812, Caulaincourt writes, twenty-four hours were not enough for Napoleon. Aides-de-camp, orderly officers and staff officers were constantly on the roads, and he waited with growing impatience for reports from the corps on the march. His first words to everyone who arrived were always the same: how many prisoners had been taken? The Russians were retreating, and the question that had always told him how a campaign was going was no longer telling him very much.",
        evidence: "fact",
        refs: [{ source: 6, locator: "p. 56" }],
      },
      episodes: [
        {
          title: "The cabinet and the map",
          text: "In September 1804 Bacler d’Albe was named head of the topographical bureau just created in the First Consul’s cabinet, and Jourquin says that he never left Napoleon’s side afterwards. An article on the staff officer Lejeune sets out the structure around them: the Emperor’s household with his aides and orderly officers, the cabinet with its secretaries and maps, and Berthier’s general staff. Its aides were expected to find fast horses at their own expense. When Napoleon was uncertain of the Austrians’ positions after crossing the Danube in 1805, this was the machinery that had to find them.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 3 }, { source: 8 }],
          battleSlugs: ["ulm"],
        },
        {
          title: "Berthier",
          text: "Berthier was chief of staff of the Grande Armée from 1805, directing six generals and eight colonels and sending out Napoleon’s orders to the marshals. Gambiez, in the Dictionnaire Napoléon, calls him an excellent chief of staff and a remarkable organiser. He says Berthier could be called at any hour, seventeen times in one night on one occasion, and always presented himself booted, spurred and in full uniform. By day he seconded the Emperor, and by night he collected intelligence, organised the armies and watched over supplies. Britannica reports that friction grew between him and the marshals as the power of the chief of staff increased. Napoleon called him the man who had served him longest and had never failed him.",
          evidence: "fact",
          refs: [{ source: 4 }, { source: 0 }],
          battleSlugs: ["austerlitz"],
        },
        {
          title: "1812: too far to see",
          text: "Caulaincourt says that spies became useless once the army crossed on to Russian soil, because the prospect of Siberia or the knout cooled their zeal, and that information came only by way of Vilna. Reports from the front could be worse than none. At Moscow, he says, Murat kept describing a Russian army in flight and Cossacks ready to desert, on the strength of flattery from Cossack officers, and Napoleon put small faith in his despatches. Britannica says that the method was not easily applied over great distances. A system tuned to the scale of western Europe had to work at the far end of a very long road, with an enemy that had no intention of being found.",
          evidence: "fact",
          refs: [{ source: 6, locator: "chs V–VI" }, { source: 1 }],
          battleSlugs: [],
          campaignSlugs: ["russian-campaign-of-1812"],
        },
        {
          title: "1813: going around the chief of staff",
          text: "By the summer of 1813, Houdecek writes, the relationship with Berthier was strained: the Major General had accumulated fatigue, and there was a reciprocal lack of confidence. That helps to explain why Napoleon was so often in direct contact with corps commanders. Britannica adds that he was wrongly informed about Bernadotte’s crossing of the Elbe and acted on further false news. The system was by then carrying more traffic, from a mind under more strain, through a weaker link.",
          evidence: "fact",
          refs: [{ source: 5 }, { source: 11 }],
          battleSlugs: ["dresden"],
        },
      ],
      witnesses: [
        {
          who: "General Gambiez",
          stake:
            "A soldier writing for the standard French reference work on Napoleon.",
          says: "He portrays Berthier as far more than a clerk, and records that he opposed the Russian campaign and contradicted Napoleon in 1813.",
          refs: [{ source: 0 }],
        },
        {
          who: "Britannica on the staff",
          stake: "A general history that judges the system by its results.",
          says: "It says the staff were required not to think or act independently but to communicate effectively, and that there was no real training for staff work.",
          refs: [{ source: 1 }],
        },
        {
          who: "Houssaye",
          stake: "A French historian of 1815, unsparing about the campaign.",
          says: "He says Soult was as superior to Berthier as a man of mind and action is to a good clerk, but had never done the work of a chief of staff.",
          refs: [{ source: 9, locator: "pp. 35–36" }],
        },
        {
          who: "Wellington, as Earl Stanhope records him",
          stake: "His opponent, at second hand.",
          says: "He remarks that nothing was too great or too small for Napoleon’s attention.",
          refs: [{ source: 10, locator: "p. 98" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the personal headquarters was a rational answer to one problem: how a single brilliant commander could direct an army of two hundred thousand men. It put maps, returns and messengers in one place and within reach of one person. For the campaigns of 1805 and 1806 it was an extraordinary instrument, and the speed of its orders was a weapon in itself.",
          evidence: "interpretation",
          refs: [{ source: 1 }, { source: 3 }],
        },
        {
          text: "What it could not do was think in his absence. Britannica’s judgement, that the staff existed to communicate, describes a design choice. It solved the problem of 1805 and created the problem of 1813. An organisation is shaped around whatever it was built to do, and by the time it was needed for something else, Napoleon would have had to rebuild it in the middle of a war.",
          evidence: "interpretation",
          refs: [{ source: 1 }, { source: 5 }],
        },
        {
          text: "The article on Lejeune puts the design in a sentence: staff officers were there to prolong and multiply the Emperor. That is an accurate description, and also the difficulty. An officer who extends another person’s reach is judged by how faithfully he carries a message, so the organisation develops people who do that well. The system had no particular way of producing officers who would tell the Emperor what the Emperor had not thought of.",
          evidence: "interpretation",
          refs: [{ source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "The limits of one mind",
          base: "none",
          text: "It is tempting to explain the later campaigns by the limits of human attention and by information overload. The research reviews on overload that could be opened for this lesson describe a field of study, and give no finding that can be applied here. No reliable mechanism is offered. What can be said is only what witnesses describe: more reports, greater distances, and one person at the centre.",
          evidence: "interpretation",
          refs: [],
          limit:
            "Claims that Napoleon was overloaded would be inference from outcomes, and this lesson does not make them.",
        },
      ],
      shadow: {
        text: "In 1815 the system met its hardest test without the man who ran it. Berthier had followed Louis XVIII and was struck from the list of marshals, and Napoleon is said to have told Las Cases that with Berthier he would not have suffered this misfortune. Soult had never done the job. Wellington’s remark that in later days Napoleon would admit no facts that did not fit his ideas rests partly on a story from Marmont and is interested at every stage, yet it points to the danger of a system where everything converges on one person: there may be nobody left to correct him.",
        evidence: "interpretation",
        refs: [
          { source: 0 },
          { source: 9, locator: "pp. 35–36" },
          { source: 10, locator: "p. 98" },
        ],
        battleSlugs: ["waterloo"],
      },
      counterCase: {
        text: "Blücher’s headquarters worked the other way. Müffling, his quartermaster general in 1813, describes all reports coming first to him; he drew up proposals and dispositions and took them to Gneisenau behind closed doors; when Gneisenau agreed they went together to the field marshal. Blücher sanctioned them, and made no difficulties about advancing. Müffling had every reason to stress his own part. Even so, what he describes is a staff that was expected to think.",
        evidence: "interpretation",
        refs: [{ source: 7, locator: "pp. 94–95" }],
        commanderSlug: "gebhard-leberecht-von-blucher",
        battleSlugs: ["leipzig"],
      },
      cost: {
        text: "The machine was hard on those who ran it. Lejeune says that he lost more than thirty horses in his later campaigns, bought at his own expense. Jourquin says that years of work beside the Emperor wore out Bacler d’Albe’s health, and that the Russian campaign left him in debt. Gambiez explains Berthier’s conduct in 1814 by exhaustion after thirty-five years of fighting.",
        evidence: "fact",
        refs: [{ source: 3 }, { source: 2 }, { source: 0 }],
      },
      transfer: {
        holdsWhen: [
          "One person’s judgement really is the organisation’s main asset, for now.",
          "The scale of the work is still within what that person can follow.",
        ],
        failsWhen: [
          "The organisation is asked to act where that person cannot see or reach.",
          "People around the leader have stopped being asked what they think.",
        ],
        questions: [
          "What decisions would stop if one person were away for a month?",
          "Are the people around you paid to pass on information, or to form a view?",
          "Who in your organisation can tell you that a report is wrong?",
        ],
      },
      bearsOn:
        "The headquarters did not get worse by itself. It was built for one size of problem and asked to deal with a larger one, while the man at its centre was asked to do more. That leans towards “the problem got harder”, with the qualification that its design was his choice and he could have changed it.",
      questions: [
        {
          prompt:
            "When was Bacler d’Albe named head of the topographical bureau?",
          choices: ["September 1804", "June 1812", "April 1796"],
          answer: 0,
          explanation:
            "Jourquin says that he never left Napoleon’s side afterwards.",
        },
        {
          prompt:
            "Why, according to Houdecek, was Napoleon so often in direct contact with corps commanders in 1813?",
          choices: [
            "He had abolished the post of chief of staff.",
            "Berthier’s fatigue and absences, and a mutual lack of confidence.",
            "The marshals had asked him to.",
          ],
          answer: 1,
          explanation:
            "This is one sign that the system’s weakest link was under strain.",
        },
        {
          prompt:
            "How did Blücher’s headquarters work, as Müffling describes it?",
          choices: [
            "Blücher wrote every order himself.",
            "Orders came directly from the king.",
            "Reports went to Müffling, whose proposals went through Gneisenau to Blücher.",
          ],
          answer: 2,
          explanation:
            "The staff was expected to form a view, though Müffling had reasons to emphasise his part.",
        },
      ],
      sourceCheck: {
        question: "Was Berthier more than a messenger?",
        witnesses: [
          {
            label: "Britannica",
            claim:
              "Berthier and his staff were required not to think or act independently but to communicate effectively between Napoleon and his corps commanders.",
          },
          {
            label: "General Gambiez, Dictionnaire Napoléon",
            claim:
              "An excellent chief of staff and a remarkable organiser, who collected intelligence at night, organised armies and watched over supplies.",
          },
        ],
        prompt: "How should these be weighed?",
        options: [
          {
            text: "Gambiez is right, and Britannica is unfair to Berthier.",
            feedback:
              "Gambiez is describing an organiser. He does not say Berthier decided what the army would do.",
          },
          {
            text: "Britannica is right, and Berthier was only a clerk.",
            feedback:
              "Britannica describes what the role required. Running such a machine demanded great ability, as Gambiez shows.",
          },
          {
            text: "He could be a superb organiser in a post that gave him no authority to decide.",
            feedback:
              "That reconciles them. The limit lay in the design of the job and not in the man.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Look at how information reaches the most senior person in an organisation you know. Who filters it, and who is allowed to disagree with it?",
        guidance:
          "Compare Napoleon’s cabinet with Blücher’s headquarters. Ask who proposes, who decides, and what would happen if the person at the top were absent.",
      },
      sources: [
        s.gambiez,
        s.forces,
        s.jourquin,
        s.lejeune,
        s.berthier,
        s.collapse,
        s.caulaincourt,
        s.muffling,
        s.coalitions,
        s.houssaye,
        s.stanhope,
        s.autumn1813,
      ],
    },
    {
      slug: "the-bottleneck",
      title: "When everything depends on one mind",
      part: "Building the instrument",
      themes: ["organisation", "judgement"],
      claim:
        "An organisation trained to wait for one person’s decision fails where that person is absent.",
      moment: {
        text: "Before the war of 1812, Caulaincourt came back from St Petersburg with a warning that he says he noted down at once. Alexander had told him that Russia would never accept a dictated peace, and then added a remark about the French army. Wonders happened where the Emperor was present in person; but he could not be everywhere, and he could not be away from Paris year after year. Napoleon heard this out, Caulaincourt says, with close attention. The Tsar had described the weakness of the whole system in a sentence.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 5–6" }],
      },
      episodes: [
        {
          title: "1813: four defeats in a month",
          text: "In the autumn of 1813 the allies agreed to avoid Napoleon and attack his subordinates. Within weeks Oudinot was beaten at Grossbeeren, Macdonald was routed by Blücher on the Katzbach, Vandamme was surrounded at Kulm and Ney was completely defeated at Dennewitz. Napoleon himself had just won at Dresden. Britannica adds that Oudinot had been left exposed in the north to contain much superior forces. Linden sums up the northern front in a phrase: the scattering of forces brought the defeat of corps commanders left to themselves. Britannica attributes the failure to exploit Dresden to his illness and the shortcomings of his corps commanders.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 4 }, { source: 1 }],
          battleSlugs: ["dresden"],
          campaignSlugs: ["german-campaign-of-1813"],
        },
        {
          title: "Ligny: the corps that fought nowhere",
          text: "On 16 June 1815 Napoleon fought Blücher at Ligny while Ney faced Wellington at Quatre Bras, and d’Erlon’s corps, between them, was meant to tip one battle or the other. D’Erlon later said that a general showed him a pencilled note ordering his corps towards Ligny, and that his column had already been turned. Ney, finding himself heavily engaged, ordered him back. The corps spent the day marching between two battles and fought in neither. Tsas says that it is impossible to reconstruct the messengers and that some testimony is doubtful.",
          evidence: "fact",
          refs: [{ source: 5 }],
          battleSlugs: ["ligny"],
        },
        {
          title: "Waterloo: the absent chief of staff",
          text: "Soult, Houssaye writes, had never done the work of a chief of staff, and lacked the application and exactness it requires. Britannica says that Ney and Grouchy failed to destroy either enemy while their armies were separated, and that Grouchy led a dilatory pursuit, while the Prussians’ main force got away and turned the tide at Waterloo. The result depended on subordinates working at a distance, in a system that had rarely asked them to.",
          evidence: "fact",
          refs: [{ source: 6, locator: "pp. 35–36" }, { source: 8 }],
          battleSlugs: ["waterloo"],
        },
      ],
      witnesses: [
        {
          who: "Chaptal",
          stake: "Once his minister, and hostile on this point.",
          says: "He says that Napoleon’s men became timid and irresolute, and that this is why he had successes wherever he was and reverses wherever he was not.",
          refs: [{ source: 3, locator: "pp. 248–249" }],
        },
        {
          who: "Napoleon on St Helena, as Gourgaud records him",
          stake:
            "Defending his plan, and with an obvious interest in naming others.",
          says: "He says he should have given Suchet the command he gave Grouchy, and that Grouchy lacked vigour and promptness. He also admits errors of his own.",
          refs: [{ source: 7, locator: "pp. 186–189" }],
        },
        {
          who: "François Tsas",
          stake:
            "Writing in a Napoleonic review, and yet holding Napoleon responsible.",
          says: "He blames Vandamme’s report of the column and, above all, Napoleon’s division of his forces. He cites a Belgian professor who called it a failure of liaison.",
          refs: [{ source: 5 }],
        },
        {
          who: "François Houdecek",
          stake: "A historian working through the correspondence itself.",
          says: "He says that Napoleon imagined many combinations in 1813, all dependent on enemy reactions he often learned of in part or too late, as if he no longer had a steady hand.",
          refs: [{ source: 1 }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the allied plan identified the weakness exactly. Napoleon could be in only one place. If armies were sent to fight wherever he was not, the French system would be tested at its least practised point. There were good reasons for his plan to operate from the Elbe, as Britannica allows, but it meant separating his forces under men whose experience was of executing his orders close at hand.",
          evidence: "interpretation",
          refs: [{ source: 2 }, { source: 13 }],
        },
        {
          text: "The events of June 1815 show the same fault on a smaller scale. A corps moved between two fields because the instructions reaching it were partial, delayed and in conflict. In the campaigns of 1805 and 1806 the distances had been shorter and the commanders more practised. Without hindsight, sending d’Erlon to Ligny may have been reasonable. A system with so little slack could not survive doing it by a pencilled note.",
          evidence: "interpretation",
          refs: [{ source: 5 }],
        },
        {
          text: "The sources also show the centre itself working less well. In October 1813, Houdecek writes, Napoleon learned only after a skirmish that it was the Russians and not Blücher’s Prussians who were at Meissen, and he chose to wait in order to let the enemy gain confidence, not realising that Blücher and Bernadotte had already joined. His plan of action was settled only in the night of 6 to 7 October. Where one mind is the single point of decision, a mistaken report at the centre costs more than it would anywhere else, because there is no other place from which it can be corrected.",
          evidence: "interpretation",
          refs: [{ source: 1 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Reluctance to act without orders",
          base: "none",
          text: "Chaptal’s picture of men made timid and irresolute by a dominating chief sounds like a psychological claim, and it would be easy to attach a modern label to it. No study read for this lesson can support one. No reliable mechanism is offered. It remains a contemporary’s judgement, from someone with a grievance, to be weighed against the marshals’ actual record.",
          evidence: "interpretation",
          refs: [],
          limit:
            "Whether the marshals’ failures in 1813 came from dependence, from fatigue or from being given impossible tasks cannot be established from the sources read.",
        },
      ],
      shadow: {
        text: "The failure was also a failure of account-keeping, because blame flowed downwards. Chaptal says that when generals were unlucky the fault was always theirs, and never the inferiority of the troops or the positions he had given them. On St Helena Napoleon went through what should have been done, named the men he should have used instead, and concluded that it was fate. The Fondation’s account notes that Grouchy’s failure to return came to be held generally as the real reason for Waterloo. A leader who keeps the decisions and passes on the blame learns nothing from his subordinates’ failures, since the lesson has been assigned to someone else.",
        evidence: "interpretation",
        refs: [
          { source: 3, locator: "p. 247" },
          { source: 7, locator: "pp. 188–189" },
          { source: 9 },
        ],
        battleSlugs: ["ligny"],
      },
      counterCase: {
        text: "At Ligny Blücher went down under his horse. The Neue Deutsche Biographie says it was then that Gneisenau gave the famous order to retreat not towards the Rhine but north on Wavre, which kept the army within reach of Wellington, and that the shares of the two men in Prussian operations can never be clearly separated. Müffling describes a staff in which proposals were worked up and argued before they reached the field marshal. An army that could take a decision of that importance with its commander on the ground had something Napoleon’s did not.",
        evidence: "interpretation",
        refs: [
          { source: 10 },
          { source: 11, locator: "pp. 94–95" },
          { source: 9 },
          { source: 12 },
        ],
        commanderSlug: "gebhard-leberecht-von-blucher",
        battleSlugs: ["ligny", "waterloo"],
      },
      cost: {
        text: "Men paid for the distance between the decision and the place. Vandamme’s corps was destroyed as a force at Kulm. Davout, cut off at Hamburg, stopped receiving communications from headquarters and, to prepare the city for a siege, had to drive part of its population out. On 16 June 1815 a whole corps marched all day while soldiers died in two battles nearby, for want of a clear message.",
        evidence: "fact",
        refs: [{ source: 2 }, { source: 4 }, { source: 5 }],
      },
      transfer: {
        holdsWhen: [
          "Important decisions wait for one person, and subordinates have rarely decided alone.",
          "The work now happens further from that person than it used to.",
        ],
        failsWhen: [
          "People have been practised in deciding independently, and have been backed when they did.",
          "The apparent dependence is really a shortage of resources, and no change in authority would help.",
        ],
        questions: [
          "Which of your people has made a major decision without you in the past year?",
          "When something went wrong without you, who got the blame?",
          "What would your organisation do if a message from you was ambiguous?",
        ],
      },
      bearsOn:
        "Houdecek’s phrase about the steady hand suggests some decline in 1813. But the marshals’ defeats came from a structural weakness that had been there since 1805, and that opponents had now found. The problem got harder because they aimed at the weakness. The weakness was his own creation.",
      questions: [
        {
          prompt: "What did Alexander tell Caulaincourt about the French army?",
          choices: [
            "That it could not be beaten anywhere.",
            "That wonders happened only where the Emperor was present, and he could not be everywhere.",
            "That its marshals were better than its Emperor.",
          ],
          answer: 1,
          explanation:
            "The allied plan of 1813 turned that observation into a strategy.",
        },
        {
          prompt: "What happened to d’Erlon’s corps on 16 June 1815?",
          choices: [
            "It marched between Ligny and Quatre Bras and fought in neither.",
            "It broke the Prussian centre at Ligny.",
            "It defeated Wellington at Quatre Bras.",
          ],
          answer: 0,
          explanation:
            "Tsas says the messages involved cannot be fully reconstructed.",
        },
        {
          prompt:
            "What does the lesson say about the psychology of the marshals’ dependence?",
          choices: [
            "That learned helplessness is proven in their case.",
            "That modern tests have measured it.",
            "That no study read can support a label, so no reliable mechanism is offered.",
          ],
          answer: 2,
          explanation:
            "Chaptal’s judgement stays a contemporary’s opinion, to be weighed against the record.",
        },
      ],
      sourceCheck: {
        question: "Who was responsible for d’Erlon’s wasted march?",
        witnesses: [
          {
            label: "D’Erlon’s own account",
            claim:
              "A general showed him a pencilled note sending his corps to Ligny, and his column had already been turned.",
          },
          {
            label: "François Tsas",
            claim:
              "He blames Vandamme’s report of the column and, above all, Napoleon’s division of his forces, and he warns that some testimony is doubtful.",
          },
        ],
        prompt: "What can safely be said?",
        options: [
          {
            text: "D’Erlon was at fault, since he left his commander without orders.",
            feedback:
              "His own account is self-defence, but it does describe an instruction that changed his route.",
          },
          {
            text: "Ney alone is to blame for recalling him.",
            feedback:
              "Ney was under attack and had been told to rely on that corps. The recall is only one link in the chain.",
          },
          {
            text: "The chain of messages cannot be rebuilt, and the fault lay at least partly in the arrangement itself.",
            feedback:
              "Tsas makes both points. When the evidence runs out, the honest move is to say so and look at the structure.",
            best: true,
          },
        ],
        battleSlug: "ligny",
      },
      seminar: {
        prompt:
          "Identify a decision in your organisation that waits for one person. What happens during the wait?",
        guidance:
          "Compare the marshals of 1813 with Blücher’s headquarters. Ask who could have acted, what stopped them, and who was blamed afterwards.",
      },
      sources: [
        s.caulaincourt,
        s.collapse,
        s.autumn1813,
        s.chaptal,
        s.linden,
        s.tsas,
        s.houssaye,
        s.gourgaud,
        s.hundredDays,
        s.blucherWaterloo,
        s.blucherNdb,
        s.muffling,
        s.blucher,
        s.forces,
      ],
    },
    {
      slug: "your-rivals-are-learning",
      title: "Competitors copy success",
      part: "Building the instrument",
      themes: ["adaptation", "organisation"],
      claim:
        "When one side keeps winning by the same method, its opponents have more reason to learn from it than it has itself.",
      moment: {
        text: "During the truce of 1813, Müffling writes, the allied sovereigns met at Trachenberg, and the question was raised whether Napoleon could ever be defeated by generals who were strangers to his mode of warfare. The words took on more weight, he says, when the army of the North was given to Bernadotte, one of Napoleon’s former marshals, and two French generals, Moreau and Jomini, were appointed as advisers at the sovereigns’ headquarters. Müffling adds that the Russian and Prussian generals, tested in 1812 and earlier, had by now earned the confidence of their armies. His enemies had hired people who knew how he worked, and they had trained some of their own.",
        evidence: "fact",
        refs: [{ source: 1, locator: "pp. 55–56" }],
      },
      episodes: [
        {
          title: "Alexander learns from Spain",
          text: "Rivals were studying the method before they had a plan to beat it. Caulaincourt records what Alexander told him before the war of 1812: the Spaniards had often been defeated and had not submitted, a beaten Russia need not accept a dictated peace, and states had been undone by lack of perseverance. He even quoted back a remark Napoleon had made after Wagram, that Austria could have had better terms if it had held out longer. The lesson he drew was that the way to defeat this commander was to refuse to accept that losing a battle had ended the war.",
          evidence: "fact",
          refs: [{ source: 11, locator: "pp. 5–6" }],
          battleSlugs: [],
        },
        {
          title: "Prussia after Jena",
          text: "In 1806 the Prussian army had not adopted the divisional system. Scharnhorst’s reforms after Tilsit established promotion by merit and began a reserve, and Britannica says that Gneisenau and his colleagues turned a force of limited conscripts and foreign enlistments into an instrument of modern mass warfare, with universal service among its practical results. Napoleon forced the dismissal of the reform party in 1808. It made no lasting difference. By 1813 the Prussians were in the field with the army those men had designed.",
          evidence: "fact",
          refs: [{ source: 10 }, { source: 5 }, { source: 6 }],
          battleSlugs: ["jena-auerstedt"],
        },
        {
          title: "Austria by 1809",
          text: "Archduke Charles, Britannica says, discarded Austria’s old military system and adopted French organisation and tactics. At Aspern-Essling in May 1809 his army attacked the bridgehead and repulsed Napoleon, a reverse that Britannica says lessened his standing in the eyes of Europe. A week later the Tirolese under Andreas Hofer retook Innsbruck: others were watching too. At Wagram in July the French won, but the Austrians gave a good account of themselves and Charles retired with his forces well in hand.",
          evidence: "fact",
          refs: [{ source: 4 }, { source: 3 }],
          battleSlugs: ["aspern-essling", "wagram"],
        },
        {
          title: "The plan of 1813",
          text: "Houdecek says the allies adopted the plan on the advice of Bernadotte, Moreau and Jomini: they would avoid battle wherever Napoleon was at the head, concentrate on beating his lieutenants and attack the chief only when his forces had been weakened. He did not know of it. Britannica records the agreement in almost the same terms. Here was a strategy built directly around the way he fought, and it led to Leipzig.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 2 }],
          battleSlugs: ["leipzig"],
        },
      ],
      witnesses: [
        {
          who: "Baron von Müffling",
          stake:
            "A Prussian staff officer writing about the coalition he served, and concerned with his own place in it.",
          says: "He reports the question raised at Trachenberg, and the appointment of French generals as advisers.",
          refs: [{ source: 1, locator: "pp. 55–56" }],
        },
        {
          who: "François Houdecek",
          stake:
            "A historian of the correspondence, writing from the French side.",
          says: "He attributes the plan to the advice of Bernadotte, Moreau and Jomini.",
          refs: [{ source: 0 }],
        },
        {
          who: "Britannica on the army of 1809",
          stake: "A general history with its own judgement of the French army.",
          says: "It says that the French at Wagram showed their inferiority to the veteran force Napoleon had wasted since 1805.",
          refs: [{ source: 3 }],
        },
        {
          who: "Wellington, as Earl Stanhope records him",
          stake: "His opponent, at second hand.",
          says: "He says that in his later days Napoleon would admit no facts that did not fit his preconceived ideas.",
          refs: [{ source: 8, locator: "p. 98" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, opponents had every reason to study him, because defeat is a strong teacher and his method was on display. He had less reason to change. Britannica says that he made no serious attempt to adopt the British firing line, and that his later battles favoured frontal attacks wasteful of men. A commander whose system has beaten everyone sees little in it to correct.",
          evidence: "interpretation",
          refs: [{ source: 7 }],
        },
        {
          text: "The allied plan of 1813 is the clearest case of learning, and it asked less of its generals than it seemed to. It accepted that nobody on the allied side could reliably beat Napoleon in person. So it stopped trying to, and aimed at the part of his system that was weakest. A strategy built on an honest estimate of one’s own limits can defeat a superior opponent.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 2 }],
        },
        {
          text: "Learning here meant more than copying. Austria and Prussia did adopt French organisation, and that alone made them harder to beat. The deeper change is the one Britannica credits to Gneisenau and his colleagues, from an army of subjects to an army of citizens, with universal service behind it. Napoleon’s system had drawn its strength from a mobilised nation. Once his opponents had mobilised theirs, the original advantage was gone, and what remained was the skill of one commander.",
          evidence: "interpretation",
          refs: [{ source: 6 }, { source: 4 }],
        },
      ],
      psychologist: [
        {
          mechanism: "The myopia of learning",
          base: "theory",
          text: "Levinthal and March argue that organisations cope with confusing experience by simplifying and specialising, and that this produces three kinds of short-sightedness: overlooking distant times, distant places and failures. They also describe a tendency to overinvest in exploiting what already works at the expense of exploring what might. Applied by analogy, the theory describes a winner with fewer failures to learn from and strong reasons to keep doing what succeeded.",
          evidence: "interpretation",
          refs: [{ source: 9 }],
          limit:
            "This is a theoretical argument about organisations, read as an abstract. It does not show that Napoleon himself stopped learning, and Wagram shows that he could adapt to circumstances.",
        },
      ],
      shadow: {
        text: "While his opponents improved, his own instrument was getting worse. Britannica says that the army of 1805 was the best he was to lead, and that at Wagram the French showed their inferiority to it. Houdecek describes 1813 as a year of extreme expansion in the levying of conscripts, with Napoleon himself finding the youngest class too young. The method that had depended on veterans now had to be carried out by men who had not had the time to become them.",
        evidence: "interpretation",
        refs: [{ source: 7 }, { source: 3 }, { source: 0 }],
        battleSlugs: ["wagram"],
      },
      counterCase: {
        text: "Schwarzenberg shows what learning looked like at the top of the coalition. At Dresden in August 1813 Napoleon beat him, and his army withdrew in disorder. Yet the plan held. Within days the losses of Oudinot, Macdonald and Vandamme had wiped out the effect of the victory, and the allies went on converging. A commander who has accepted that he may lose a battle to Napoleon can go on with the campaign regardless.",
        evidence: "interpretation",
        refs: [{ source: 2 }],
        commanderSlug: "karl-philipp-schwarzenberg",
        battleSlugs: ["dresden", "leipzig"],
      },
      cost: {
        text: "Replacing veterans with mass was paid for by the young. Houdecek records the repeated levies of 1813, and that when desertion and insubordination spread Napoleon ordered corps commanders to shoot one man in ten. Britannica’s word for what became of the army of 1805 is that he wasted it.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 3 }],
      },
      transfer: {
        holdsWhen: [
          "Your method is visible and has repeatedly beaten people who have every reason to study it.",
          "Your own record gives you few failures to learn from.",
        ],
        failsWhen: [
          "Your advantage depends on something rivals cannot copy, such as a resource they do not have.",
          "You are still deliberately exploring alternatives while your current method works.",
        ],
        questions: [
          "If a rival studied how you win, what would they conclude about how to beat you?",
          "Who have you lost to in the past year, and what did you learn from it?",
          "What are you spending on what might work next?",
        ],
      },
      bearsOn:
        "This is the plainest evidence that the problem got harder: enemies reorganised, adopted his methods and built a strategy around his habits. It is not the whole answer. His own army was also weakening, by his own use of it, and Wellington’s remark, though late and interested, suggests that some of the failure to adapt lay in the man.",
      questions: [
        {
          prompt: "What did the allied plan of 1813 aim to do?",
          choices: [
            "Attack Napoleon wherever he appeared.",
            "Avoid battle where he commanded and defeat his lieutenants.",
            "Force him to fight only at sea.",
          ],
          answer: 1,
          explanation:
            "It aimed at the weakest part of his system, and it did not require any allied general to beat him in person.",
        },
        {
          prompt: "What had Archduke Charles done with the Austrian army?",
          choices: [
            "Discarded the old system and adopted French organisation and tactics.",
            "Disbanded it and relied on the Russians.",
            "Kept its old methods unchanged.",
          ],
          answer: 0,
          explanation:
            "It defeated Napoleon at Aspern-Essling in 1809, though it lost at Wagram.",
        },
        {
          prompt:
            "What does Levinthal and March’s theory say organisations tend to overlook?",
          choices: [
            "Only their competitors.",
            "Their own finances.",
            "Distant times, distant places and failures.",
          ],
          answer: 2,
          explanation:
            "A habitual winner has few failures to learn from, which is why the lesson uses this theory by analogy.",
        },
      ],
      sourceCheck: {
        question: "Who should be credited with the strategy of 1813?",
        witnesses: [
          {
            label: "François Houdecek",
            claim:
              "The allies drew up the plan at Trachenberg, following the advice of Bernadotte, Moreau and Jomini.",
          },
          {
            label: "Baron von Müffling",
            claim:
              "Bernadotte played an important part at Trachenberg; Moreau and Jomini were appointed advisers after the truce ended.",
          },
        ],
        prompt: "What should a reader do with this difference?",
        options: [
          {
            text: "Accept Houdecek, since he is working from the documents.",
            feedback:
              "His access counts, but Müffling was on the allied side at the time, and his chronology raises a real question.",
          },
          {
            text: "Accept that Bernadotte’s part is agreed, and that the timing of Moreau’s and Jomini’s influence is less clear.",
            feedback:
              "That separates what the sources agree on from what they do not. It may also be that advice was given in more than one form.",
            best: true,
          },
          {
            text: "Conclude that nobody knows anything about the plan.",
            feedback:
              "Both agree on what the plan was. The doubt concerns only who shaped it, and when.",
          },
        ],
        battleSlug: "leipzig",
      },
      seminar: {
        prompt:
          "Choose a method your organisation relies on. Who has had the most reason to study it, and what will they have learned?",
        guidance:
          "Compare Prussia in 1806 and 1813. Look for who was forced to change, who was not, and what the winner stopped looking at.",
      },
      sources: [
        s.collapse,
        s.muffling,
        s.autumn1813,
        s.aspern,
        s.archduke,
        s.scharnhorst,
        s.gneisenau,
        s.forces,
        s.stanhope,
        s.levinthal,
        s.jenaCampaign,
        s.caulaincourt,
      ],
    },
    {
      slug: "winning-battles-is-not-ending-wars",
      title: "Victory without settlement",
      part: "The limits of the self",
      themes: ["judgement", "restraint"],
      claim:
        "While battles keep being won, success can conceal the absence of a political end that opponents could accept.",
      moment: {
        text: "In June 1813, during the armistice, Metternich came to Dresden to put Austria’s position to Napoleon. He left an account of the answer. Your sovereigns, Napoleon said, “born to the throne, may be beaten twenty times, and still go back to their palaces”; he could not, because his reign would not outlast the day when he had ceased to be strong and therefore to be feared. Metternich was preparing to join the war and was writing for publication, so these are his words for what was said. If anything like them was spoken, they state the difficulty of this lesson exactly. His enemies could lose and make peace. By his own reckoning, he could not afford to stop winning.",
        evidence: "fact",
        refs: [
          {
            source: 0,
            locator: "p. 186",
          },
        ],
      },
      episodes: [
        {
          title: "Friedland and Tilsit: a peace with one partner",
          text: "After Friedland in June 1807 the Russians asked for an armistice, and at Tilsit Napoleon got what looked like the end of the war. It was a settlement of two very different halves. Russia lost nothing and became an ally. Prussia was cut to half its former population, stripped of everything west of the Elbe, kept out of the talks between the emperors and occupied until a heavy indemnity had been paid. Britannica says that Alexander made peace partly from dissatisfaction with Britain and fear of what a French invasion would stir up at home. The treaty therefore rested on the calculations of one sovereign and on the helplessness of another. By 1811 Alexander was saying, as Caulaincourt reported, that he would withdraw to Kamchatka sooner than sign in his own capital a treaty that would be no more than a truce.",
          evidence: "fact",
          refs: [
            {
              source: 1,
            },
            {
              source: 2,
            },
            {
              source: 3,
              locator: "pp. 5–6",
            },
          ],
          battleSlugs: ["friedland"],
        },
        {
          title: "Spain from 1808: a war no battle could close",
          text: "Tilsit left Napoleon free, Britannica says, to complete the Continental System, the economic war against Britain, and that drew him into Portugal and then Spain. At Bayonne in May 1808 he forced the Spanish royal family to give up the throne and named his brother Joseph king. Madrid had already risen on 2 May. The rising was put down, the provinces rose in turn, Dupont capitulated at Bailén in July, and Joseph was driven from his capital. A French counterattack retook Madrid in December, and it settled nothing. Elizabeth Latimer, the translator of Gourgaud, puts the novelty simply: until then, when he occupied a capital, both sides had thought the war virtually over. The war lasted until 1814.",
          evidence: "fact",
          refs: [
            {
              source: 4,
            },
            {
              source: 5,
              locator: "p. 128 (translator’s note)",
            },
          ],
          battleSlugs: [],
        },
        {
          title: "1813: two victories and a peace not taken",
          text: "After Russia, Napoleon won at Lützen and Bautzen in May 1813. Neither victory destroyed the allied armies, which got away, and on 4 June he proposed an armistice that was extended to 10 August for peace talks at Prague. Meanwhile Austria agreed at Reichenbach to enter the war if he refused its terms, and those terms and the allies’ further demands went far: the end of the duchy of Warsaw and the Confederation of the Rhine, and the surrender of the German annexations, Holland, Italy, Spain and Illyria. Metternich says he told him that there was absolute contradiction between what Europe needed and what he had been pursuing, and that peace was available today and perhaps not tomorrow.",
          evidence: "fact",
          refs: [
            {
              source: 6,
            },
            {
              source: 0,
              locator: "p. 186",
            },
          ],
          battleSlugs: ["lutzen-1813", "bautzen"],
          campaignSlugs: ["german-campaign-of-1813"],
        },
        {
          title: "1814: terms that moved with the fighting",
          text: "At Frankfurt in November 1813 Metternich offered peace on France’s natural frontiers, on condition of prompt acceptance. When Caulaincourt delivered Napoleon’s assent on 2 December, the offer had been withdrawn. At Châtillon in February 1814 the allies demanded the frontiers of 1792. Napoleon, who after La Rothière had given Caulaincourt a free hand, rejected that, and his success at Montmirail led him to demand the Rhine and the Alps. On 9 March, at Chaumont, the four allies bound themselves to continue until France accepted the old frontiers. By mid-April he had abdicated. The February victories had done what victories usually did for him: they raised his terms just as his enemies were agreeing never to accept them.",
          evidence: "fact",
          refs: [
            {
              source: 7,
            },
            {
              source: 8,
            },
          ],
          battleSlugs: [],
          campaignSlugs: ["campaign-in-france-1814"],
        },
      ],
      witnesses: [
        {
          who: "Metternich",
          stake:
            "Austria’s minister, on the verge of joining the coalition, and telling the story afterwards in his own favour.",
          says: "He says he warned Napoleon that the army he had just raised was made up of children, and that Napoleon answered in rage that a man like him cared little for the lives of a million men.",
          refs: [
            {
              source: 0,
              locator: "pp. 189–190",
            },
          ],
        },
        {
          who: "Caulaincourt",
          stake:
            "A former ambassador who wanted peace and recalls having said so.",
          says: "He says he urged Napoleon before 1812 to redraw Europe with reasonable boundaries and to announce his moderation openly, which he thought would do more to bring Britain to terms than the Continental System.",
          refs: [
            {
              source: 3,
              locator: "pp. 29–30",
            },
          ],
        },
        {
          who: "Napoleon on St Helena, as Gourgaud records him",
          stake: "Explaining defeat to a small audience, years later.",
          says: "He says that even at Dresden he ought to have made peace. He also says that Vitoria came at exactly the moment when he could no longer sign, and that his great mistake in Spain was not giving Ferdinand an adopted girl as a wife.",
          refs: [
            {
              source: 5,
              locator: "pp. 129, 156",
            },
          ],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, several of these decisions were reasonable. After Friedland Napoleon had not the means, Britannica says, for an early invasion of Russia, and a peace with an alliance attached was better than he could have forced. Peace with Britain was the problem, and he saw only one way of reaching it: striking at its trade, which needed every port on the Continent closed. A war aim that requires the permanent compliance of a whole continent cannot be achieved by winning. It can only be maintained, and every government asked to maintain it acquires a reason to want it ended.",
          evidence: "interpretation",
          refs: [
            {
              source: 1,
            },
            {
              source: 4,
            },
          ],
        },
        {
          text: "Clausewitz wrote that war is a continuation of political commerce by other means, and that the political object keeps a prior right to consideration. The test this implies is simple to state and hard to apply: what would this enemy, having lost, be willing to go on accepting? Friedland answered that question for Russia only for as long as Alexander chose. Madrid could not answer it at all, because the people fighting were not the people who had been made to abdicate. Napoleon’s remark on St Helena about Ferdinand’s marriage shows how far he went on treating Spain as a dynastic arrangement that had been badly managed.",
          evidence: "interpretation",
          refs: [
            {
              source: 9,
              locator: "bk I, ch. 1, §§ 23–24",
            },
            {
              source: 5,
              locator: "p. 129",
            },
          ],
        },
        {
          text: "It cannot be shown that a lasting peace was available in 1813 or 1814. The Frankfurt offer had only the reluctant approval of Russia and Prussia, and the allies did not intend to stop operations while they waited. The Fondation’s timeline calls the armistice of 1813 his great mistake, since with two more weeks of campaigning he might have divided the allies; Britannica says his offensive had spent its force and that his army lacked ammunition, supplies and cavalry. The difference matters. If Metternich’s record is right, Napoleon’s own view of his position ruled out the concessions that might have tested the offers.",
          evidence: "uncertainty",
          refs: [
            {
              source: 7,
            },
            {
              source: 10,
            },
            {
              source: 6,
            },
            {
              source: 0,
              locator: "p. 186",
            },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "A goal that narrows what is noticed",
          base: "review",
          text: "Ordóñez and colleagues argue, against a large literature on the benefits of goal-setting, that specific goals can produce a narrow focus that neglects whatever lies outside the goal, and can distort attitudes to risk. Winning the next battle is about as specific as a goal can be, and Napoleon was very good at it. As a reading of this record, the battle may have crowded out the less measurable question of what would make his enemies stop. The evidence also cuts the other way. He talked about peace constantly, and he told his soldiers before Borodino what victory would bring them.",
          evidence: "interpretation",
          refs: [
            {
              source: 11,
            },
            {
              source: 12,
              locator: "pp. 353–354",
            },
          ],
          limit:
            "Read in abstract only. It is an argument about modern organisations, and it cannot show what a commander was attending to. The political reason Metternich records may explain the same conduct without any bias at all.",
        },
      ],
      shadow: {
        text: "This lesson is the shadow of everything the lessons on judgement praised. The speed, the reading of ground and the habit of asking what the next battle required all pointed one way. On the road to Moscow Caulaincourt heard him tell a detained Russian officer that the war was a political matter, and that a battle would clear the way to peace, much as a duel reconciles two opponents. The officer replied that he did not think peace possible while the French were on Russian soil. At Borodino itself Napoleon’s worry was that a victory without prisoners would not be conclusive. He kept defining the conclusion in military terms.",
        evidence: "interpretation",
        refs: [
          {
            source: 3,
            locator: "pp. 81, 99",
          },
        ],
        battleSlugs: ["borodino"],
      },
      counterCase: {
        text: "Kutuzov’s war had a limit that the enemy’s failure could complete. Ganière says he thought his objective reached once no foreign soldier remained on Russian soil, and the Fondation’s biography notes his opposition to Alexander’s wish to carry the war into Germany. The Tsar had reproached him for softness. In the same year he had concluded the peace signed at Bucharest. His view did not prevail, and the war went on into Germany and France. A defender also finds a bounded aim easier to hold. Metternich, for his part, says he kept building Austria’s forces because the means of peace could only be found in time.",
        evidence: "interpretation",
        refs: [
          {
            source: 13,
          },
          {
            source: 14,
          },
          {
            source: 0,
            locator: "p. 163",
          },
          {
            source: 8,
          },
        ],
        commanderSlug: "mikhail-kutuzov",
        battleSlugs: ["borodino"],
      },
      cost: {
        text: "The price of not ending the war was paid by people who had no part in deciding it. Britannica says the rising in Madrid was ruthlessly suppressed, and six years of war in Spain followed. Prussia’s civilians carried the French occupation. After Russia the armies were refilled with conscripts, and Metternich says he told Napoleon at Dresden that the soldiers he had seen were children. They fought on through 1813 and into France.",
        evidence: "fact",
        refs: [
          {
            source: 4,
          },
          {
            source: 1,
          },
          {
            source: 0,
            locator: "p. 190",
          },
        ],
      },
      transfer: {
        holdsWhen: [
          "Each success is measured in the thing you are already good at, while the conflict is about something else.",
          "The other side cannot accept the terms without giving up what it most needs.",
        ],
        failsWhen: [
          "The opponent really can be compelled, and will stay compelled, by defeat.",
          "No acceptable settlement was on offer, so restraint would have gained nothing.",
        ],
        questions: [
          "What would your opponent, having lost, be willing to go on accepting?",
          "Which of your recent successes actually brought the end closer?",
          "What in your own position stops you from accepting a modest result?",
        ],
      },
      bearsOn:
        "Spain and Tilsit come before any supposed decline. Napoleon was at his height when he made a peace that depended on one Tsar, and an enemy of a people who would not be bound by what their king signed. Here he got no worse; the problem was always harder than a battlefield could solve. What changed in 1813 and 1814 is that he had fewer ways left to postpone it.",
      questions: [
        {
          prompt: "What did Tilsit do to Russia and to Prussia?",
          choices: [
            "It punished both equally.",
            "Russia lost nothing and became an ally, while Prussia lost half its population.",
            "Prussia became France’s main ally, while Russia lost its Polish lands.",
          ],
          answer: 1,
          explanation:
            "That uneven settlement rested on Alexander’s continued calculation and Prussia’s helplessness.",
        },
        {
          prompt: "Why did occupying Madrid not end the war in Spain?",
          choices: [
            "The people resisting were not bound by what their rulers had been made to sign.",
            "The French never reached Madrid.",
            "Britain had already made peace.",
          ],
          answer: 0,
          explanation:
            "Madrid rose on 2 May 1808, before the abdications were complete, and the provinces followed.",
        },
        {
          prompt:
            "What can be said about whether peace was available in 1813 or 1814?",
          choices: [
            "A lasting peace was definitely on offer.",
            "The allies never offered any terms.",
            "It cannot be shown: the offers were real but conditional, and the allies kept fighting.",
          ],
          answer: 2,
          explanation:
            "Frankfurt had only reluctant allied approval and was withdrawn before his assent arrived.",
        },
      ],
      sourceCheck: {
        question: "Was the armistice of June 1813 Napoleon’s mistake?",
        witnesses: [
          {
            label: "Fondation Napoléon timeline",
            claim:
              "It calls the armistice his great mistake: with more boldness he could have fought on two more weeks and divided the allies.",
          },
          {
            label: "Encyclopaedia Britannica",
            claim:
              "His offensive had spent its force, his army lacked ammunition and supplies, and he was short of cavalry; he counted on matching the allies’ growth during the pause.",
          },
        ],
        prompt: "What is the fairest conclusion?",
        options: [
          {
            text: "The timeline is right, so the armistice lost him the war.",
            feedback:
              "It says what might have been gained. It cannot show that Austria would then have stayed out.",
          },
          {
            text: "Both describe real pressures: he had an advantage he could not easily sustain, and the outcome of fighting on is unknowable.",
            feedback:
              "Yes. The two accounts disagree about the balance of a risk, and neither can test the alternative.",
            best: true,
          },
          {
            text: "Britannica is right, so the armistice was a wise decision.",
            feedback:
              "That his army needed rest does not show that the pause served him better than it served the allies.",
          },
        ],
        campaignSlug: "german-campaign-of-1813",
      },
      seminar: {
        prompt:
          "Pick the moment between 1807 and 1814 when Napoleon could most plausibly have settled. What exactly would he have had to give up?",
        guidance:
          "Name the concession and who would have had to accept it. Say what would have kept the bargain in force after he had made it, and what Metternich’s record suggests it would have cost him at home.",
      },
      sources: [
        s.metternich,
        s.winter1807,
        s.polish1807,
        s.caulaincourt,
        s.peninsular,
        s.gourgaud,
        s.mediation,
        s.france1814,
        s.chatillon,
        s.clausewitz,
        s.timeline1813,
        s.ordonez,
        s.corsican,
        s.ganiere,
        s.kutuzovBio,
      ],
    },
    {
      slug: "knowing-when-to-stop",
      title: "Knowing when to stop: Acre and Moscow",
      part: "The limits of the self",
      themes: ["restraint", "judgement"],
      claim:
        "Cutting losses is hardest when the leader’s standing is tied to the commitment and no one can release them from it.",
      moment: {
        text: "Some time after he reached Moscow in September 1812, Napoleon admitted to those closest to him that it was a bad position. Caulaincourt had this from Berthier and Duroc: the city could be held only long enough to reorganise, and the Austrians and Prussians guarding his rear would become dangerous at the first reverse. He stayed for about a month. Caulaincourt, who watched it, could explain it only as hope, of an answer from the Tsar or of an armistice with Kutuzov that would lead further.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 145–146" }, { source: 2 }],
      },
      episodes: [
        {
          title: "Acre: a stopping rule",
          text: "In the spring of 1799 Bonaparte besieged Acre, a fortress resupplied from the sea. His letters ran hot: on 19 April he told a correspondent that Acre would be his by the time the letter arrived. On 9 May, with assaults failing, he set out both futures in one note. “This wretched clump of hovels has cost me many lives and much time.” If the last attempt succeeded he would raise Syria and march on Constantinople. “If I fail in the last assault I mean to deliver, I shall leave at once, as time is pressing.” The attackers reached the walls and found further defences built behind them. Reluctantly, in Britannica’s word, he accepted defeat; Lentz dates the lifting of the siege to 17 May.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "pp. 96–98" },
            { source: 3 },
            { source: 4 },
          ],
          battleSlugs: ["acre"],
        },
        {
          title: "Smolensk: the wish to stop",
          text: "In August 1812 Smolensk was in ruins and the Russians had slipped away. Caulaincourt writes that the Emperor made the city his pivot, worked on its supplies and hospitals, and by 20 August seemed to have no wish to go further. A retreating enemy, a burned city and a war of mutual destruction gave him serious thought and strengthened his desire to seek negotiations. Then he went on. Britannica gives the logic: he needed a rapid and decisive victory, and Smolensk, though won, had not destroyed Russian resistance.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 80–81" }, { source: 5 }],
          battleSlugs: ["smolensk-1812"],
        },
        {
          title: "Moscow: the month",
          text: "The Russians refused to come to terms, and Britannica notes that both military and political dangers could be foreseen in wintering at Moscow. Ganière gives the sequence. Caulaincourt argued against going to the Tsar, so Lauriston went to Kutuzov’s outposts on 4 October, carrying instructions, as Ganière quotes them, that peace must be had at any price so long as honour was saved. No treaty came. What ended the wait was a Russian attack near Tarutino, after which, in Ganière’s account, he wanted it impossible to say that a check had forced him out, and ordered a march on Kaluga. The army began to leave on 19 October.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 6 }],
          battleSlugs: [],
          campaignSlugs: ["russian-campaign-of-1812"],
        },
      ],
      witnesses: [
        {
          who: "Caulaincourt",
          stake:
            "Close to Napoleon, and writing as the man who had warned against the war. This passage comes to him second hand, from Berthier and Duroc.",
          says: "Napoleon saw clearly that Moscow was dangerous and at the same time kept nourishing his hopes of peace.",
          refs: [{ source: 0, locator: "pp. 145–146" }],
        },
        {
          who: "Napoleon on St Helena, as Gourgaud records him",
          stake:
            "An exile’s defence: a single error implies that the plan itself was sound.",
          says: "“My great error was staying in that city too long. But for that, my enterprise might have been crowned with success.”",
          refs: [{ source: 7, locator: "p. 156" }],
        },
        {
          who: "Napoleon before Acre, in Johnston’s diary",
          stake:
            "Written at the time, for his own purposes and to subordinates, and later selected by an editor.",
          says: "He promises Acre within days, and on 9 May writes down what he will do if the last assault fails.",
          refs: [{ source: 1, locator: "pp. 96–98" }],
        },
        {
          who: "Paul Ganière",
          stake:
            "A historian writing for a Napoleonic society’s review, who quotes memoir sources without always naming them.",
          says: "He stresses how far Napoleon’s movements were shaped by the fear of seeming to run.",
          refs: [{ source: 6 }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, Moscow offered no good option. To winter there carried the dangers Britannica names. A march on St Petersburg, which he raised with his marshals, Caulaincourt thought he never seriously meant. To retreat was to announce failure to allies in his rear who would turn on him at the first reverse. Waiting for an answer was therefore not foolish in itself. The case against it is that the warning had been delivered: before the war Alexander had told Caulaincourt that a beaten Russia need not accept a dictated peace, and Caulaincourt says he passed it on. The information was available, and each week of waiting spent the season.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 5–6, 134–135, 145" },
            { source: 2 },
          ],
        },
        {
          text: "What separates Acre from Moscow is not courage or intelligence. Before the last assault at Acre he had named what would make him stop, and he kept to it. Acre was one operation, and he could turn back to Egypt with a battle still to be won. Moscow was the furthest point reached by the largest army Europe had seen, and leaving without peace would tell every ally he had failed. The more depended on being seen to succeed, the harder it became to set or to keep a stopping rule.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "p. 98" }, { source: 3 }, { source: 8 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Escalation of commitment",
          base: "contested",
          text: "Escalation of commitment names a tendency to put more into a failing course when one is personally responsible for it. Białek and colleagues, trying to replicate Staw’s 1976 study with 365 participants, found no evidence of it: people simply invested more in more promising projects. The FLoRA replication atlas records that result as failed and a 2022 replication as mixed. Sleesman and colleagues, by contrast, could carry out a meta-analysis of the many determinants studied over more than thirty-five years. The finding is unsettled, and Moscow should not be diagnosed with a laboratory label. It also fits Moscow badly. If Caulaincourt is right, Napoleon saw the danger and stayed, which looks less like a bias hiding a loss than like a loss he could not afford to admit.",
          evidence: "interpretation",
          refs: [{ source: 9 }, { source: 10 }, { source: 11 }],
          limit:
            "Experiments on investment decisions cannot be carried over to an emperor in 1812. Only abstracts were read for this lesson, and Staw’s original paper could not be read.",
        },
      ],
      shadow: {
        text: "Stopping is not the same as stopping well. Ganière has him unwilling even to pronounce the word retreat. He left Moscow announcing a march on Kaluga, meaning to return through country the war had not touched. Kutuzov blocked the way at Maloyaroslavets on 24 October. The French held the town, and Napoleon, in Ganière’s quotation, said that he kept beating the Russians and that it settled nothing. Then he took the road he had come by, known to be devastated and under constant threat. A decision delayed for reasons of face had lost the time that might have made it safe.",
        evidence: "interpretation",
        refs: [{ source: 6 }, { source: 2 }],
        battleSlugs: ["maloyaroslavets"],
      },
      counterCase: {
        text: "Kutuzov faced the mirror of this problem and took the other course. At a council at Fili on 13 September it was accepted that trying to hold Moscow would destroy the army. Davey-Wright, following Lieven, says Kutuzov had already reached that view but needed agreement before ordering the retreat, and Bennigsen later blamed him and Barclay for it. Alexander also reproached him over the halt at Tarutino. Kutuzov could give up the capital and keep his command, in part because, as Ganière notes, the Tsar knew the army had no one to replace him. Someone able to release him from the commitment had chosen not to punish him for leaving it.",
        evidence: "interpretation",
        refs: [{ source: 12 }, { source: 6 }],
        commanderSlug: "mikhail-kutuzov",
        battleSlugs: ["borodino"],
      },
      cost: {
        text: "Britannica notes that the large majority of the losses of the retreat occurred before the first snowfall on 6 November, which cuts against the familiar picture of an army killed by winter. On the way back the French found Smolensk ravaged and almost without supplies. On the retreat from Acre, Bonaparte passed through Jaffa and left behind men who had the plague, a decision for which, Lentz notes, he went on being criticised. Stopping had a price even when it was right. Not stopping had a greater one, and soldiers and the towns on the line of march paid it.",
        evidence: "fact",
        refs: [{ source: 2 }, { source: 4 }],
      },
      transfer: {
        holdsWhen: [
          "The person deciding has publicly staked their authority on the outcome.",
          "No superior, board or colleague can tell them to stop without cost to themselves.",
        ],
        failsWhen: [
          "The commitment can be reversed cheaply, so that little is really at stake.",
          "Stopping would itself destroy what can still be saved. At some point continuing is the least bad choice.",
        ],
        questions: [
          "What result would make you stop, and did you write it down before you began?",
          "Who could tell you to stop, and what would it cost them?",
          "How much of your reluctance is about the project, and how much about how stopping would look?",
        ],
      },
      bearsOn:
        "Acre and Moscow are thirteen years apart. The same man set a stopping rule at twenty-nine and could not keep to the wish to stop at forty-three. That can be read as decline. It can as easily be read as scale: at Acre he had an army to save and a career to make, and at Moscow an empire whose allies were waiting to see him fail. On St Helena his own verdict is one error in a sound plan. The evidence does not separate these readings.",
      questions: [
        {
          prompt:
            "What did Bonaparte write on 9 May 1799 about the last assault on Acre?",
          choices: [
            "That he would stay until Acre fell, whatever the cost.",
            "That if it failed he would leave at once.",
            "That he would wait for reinforcements from France.",
          ],
          answer: 1,
          explanation:
            "He set out what success would bring and what failure would mean, and he named time as the reason.",
        },
        {
          prompt:
            "According to Britannica, when did the large majority of the losses of the retreat from Moscow occur?",
          choices: [
            "Before the first snowfall.",
            "During the bitter cold of December.",
            "At the crossing of the Berezina.",
          ],
          answer: 0,
          explanation:
            "The first snowstorm came on 6 November. The picture of an army destroyed mainly by winter does not fit Britannica’s account.",
        },
        {
          prompt:
            "What does the lesson conclude about escalation of commitment?",
          choices: [
            "It proves why Napoleon stayed in Moscow.",
            "It has been refuted and should be ignored.",
            "The finding is unsettled, and it fits Moscow badly.",
          ],
          answer: 2,
          explanation:
            "A replication failed and another was mixed, while a meta-analysis shows a large body of work. And Caulaincourt suggests Napoleon saw the danger.",
        },
      ],
      sourceCheck: {
        question: "Did Napoleon understand his danger in Moscow?",
        witnesses: [
          {
            label: "Caulaincourt, from Berthier and Duroc",
            claim:
              "He admitted from the start that Moscow was a bad position, and went on hoping for peace.",
          },
          {
            label: "Napoleon on St Helena, recorded by Gourgaud",
            claim:
              "His great error was staying in the city too long; but for that, the enterprise might have succeeded.",
          },
        ],
        prompt: "What can be concluded from these two accounts?",
        options: [
          {
            text: "Napoleon did not grasp the danger until it was too late.",
            feedback:
              "Caulaincourt’s account says the opposite, though at second hand. Napoleon’s later regret does not show what he understood at the time.",
          },
          {
            text: "He knew the danger, and each account has reasons to frame that knowledge as it does.",
            feedback:
              "Caulaincourt had warned against the war and Napoleon was defending the enterprise. The two can agree on the fact and differ on its meaning.",
            best: true,
          },
          {
            text: "Neither account has value, because both were written after the event.",
            feedback:
              "Late accounts are still evidence. The task is to ask what each author wanted, and what they agree on despite that.",
          },
        ],
        campaignSlug: "russian-campaign-of-1812",
      },
      seminar: {
        prompt:
          "Think of a project you watched continue too long. Who could have stopped it, and what would that have cost them?",
        guidance:
          "Compare Acre with Moscow. Look for whether a stopping condition was named in advance, who was watching, and what admitting failure would have meant for the person in charge.",
      },
      sources: [
        s.caulaincourt,
        s.corsican,
        s.retreat,
        s.acre,
        s.lentz,
        s.smolensk,
        s.ganiere,
        s.gourgaud,
        s.russia,
        s.bialek,
        s.flora,
        s.sleesman,
        s.fili,
      ],
    },
    {
      slug: "who-can-tell-you-no",
      title: "Who can tell you no?",
      part: "The limits of the self",
      themes: ["judgement", "organisation"],
      claim:
        "The higher a leader’s success, the more deliberately dissent must be protected.",
      moment: {
        text: "In the months before the invasion of Russia, Caulaincourt, who had been ambassador at St Petersburg, argued against it to Napoleon’s face. He spoke of the distance and the climate, of the war still unfinished in Spain, and of an enemy who would let him advance and wear himself out without a battle. Napoleon’s reply was that Caulaincourt had gone over to the Russians and understood nothing of great affairs. Caulaincourt answered that in that case it was odd to be consulted. He added that nobody contradicted the Emperor for amusement, since doing so had brought neither him nor his friends any advantage.",
        evidence: "fact",
        refs: [
          {
            source: 0,
            locator: "pp. 32–33",
          },
        ],
      },
      episodes: [
        {
          title: "What it cost Caulaincourt",
          text: "He was not simply ignored. Caulaincourt records the Emperor’s acerbity towards him after his return, and pressure on his private life. Duroc, the grand marshal and a friend, came to explain the position. The Emperor valued him, but he ought to spare the Emperor’s susceptibilities; it was easier to lead him by giving way on certain points than by opposing him directly; and it was foolish to sacrifice oneself over large matters one could not change. Duroc, says Caulaincourt, let him see that at heart he agreed. Yet Napoleon could also be a real listener: in one conversation of five hours he kept returning to the same questions, apparently to see whether the answers held.",
          evidence: "fact",
          refs: [
            {
              source: 0,
              locator: "pp. 9–10, 19–20",
            },
          ],
          battleSlugs: [],
          campaignSlugs: ["russian-campaign-of-1812"],
        },
        {
          title: "Borodino: Davout’s flanking march",
          text: "On the eve of Borodino Davout proposed taking his corps on a wide turning movement round the Russian left, and Linden says that he insisted. Napoleon judged it too risky and allowed only a small manoeuvre by Poniatowski. Britannica gives the reason: he feared that an attempt to outflank the Russians might fail and let them escape, after a campaign spent trying to bring them to battle. This was disagreement working as it should. A subordinate made a proposal, it was argued, and the commander decided. What followed was what Britannica calls a crude frontal attack.",
          evidence: "fact",
          refs: [
            {
              source: 1,
            },
            {
              source: 2,
            },
          ],
          battleSlugs: ["borodino"],
        },
        {
          title: "Waterloo: Soult and Reille that morning",
          text: "On the morning of 18 June 1815 Soult, who had fought Wellington in Spain, advised recalling part of Grouchy’s force. Houssaye reports Napoleon’s answer: “Because you have been beaten by Wellington you regard him as a great general,” with the addition that this would be a very small affair. Reille was then asked directly about the English infantry. Well posted and attacked in front, he said, it was invincible, but it was less supple than the French and might be beaten by manoeuvring. Napoleon broke off the conversation. Houssaye suggests that he may have been irritated at frankness that could discourage the generals listening. Houssaye’s own source for the exchange has not been traced.",
          evidence: "fact",
          refs: [
            {
              source: 3,
              locator: "pp. 163–164",
            },
          ],
          battleSlugs: ["waterloo"],
        },
        {
          title: "Smorgoni: why don’t you answer?",
          text: "At Smorgoni on 5 December 1812, as he prepared to leave the army, Napoleon told Caulaincourt that the retreat would soon be over, since Vilna was well supplied. Caulaincourt says that, having tried before to describe the real state of things, this time he listened and said nothing. Napoleon noticed and demanded his opinion. Caulaincourt told him that the army would not rally and that Vilna should be evacuated. Napoleon laughed at the idea. In the end the silence was the more significant event. A man who had spent so long telling the truth had concluded that there was no use in volunteering it.",
          evidence: "fact",
          refs: [
            {
              source: 0,
              locator: "pp. 266–267",
            },
          ],
          battleSlugs: ["berezina"],
        },
      ],
      witnesses: [
        {
          who: "Chaptal",
          stake: "Once his minister, and hostile on this point.",
          says: "He says that apart from two or three who had known him young, the generals approached him trembling, and that he kept them at a distance and told them his orders only at the moment of execution.",
          refs: [
            {
              source: 4,
              locator: "pp. 246–247",
            },
          ],
        },
        {
          who: "The introduction to Thibaudeau’s memoir",
          stake:
            "A sympathetic editor, describing a councillor who kept his independence.",
          says: "He voted against nearly all Bonaparte’s schemes, including the Legion of Honour, the Concordat and the Consulate for life, and kept his esteem. In 1803 he was suddenly sent away to the prefecture at Marseilles.",
          refs: [
            {
              source: 5,
              locator: "pp. xxv–xxvi",
            },
          ],
        },
        {
          who: "General Gambiez on Berthier",
          stake: "An admiring biographer of the chief of staff.",
          says: "Berthier was not in favour of the Russian campaign or of Murat’s appointment to command its remnants, and he contradicted Napoleon again in 1813, drawing the retort “de quoi vous mêlez-vous !”",
          refs: [
            {
              source: 6,
            },
          ],
        },
        {
          who: "Wellington, as Stanhope records him, passing on Marmont",
          stake:
            "An old enemy repeating a story from a marshal who had changed sides.",
          says: "In 1814, he says, Marmont repeatedly told Napoleon that he had three thousand men, and Napoleon nodded and went on planning for ten thousand.",
          refs: [
            {
              source: 7,
              locator: "p. 98",
            },
          ],
        },
        {
          who: "Napoleon on St Helena, as Gourgaud records him",
          stake: "Rearranging the past, in private.",
          says: "He says Narbonne told him the Russian expedition was the ruin of the Empire and urged peace at Dresden, and that he should have listened. In the same breath he calls Caulaincourt a man of no ability.",
          refs: [
            {
              source: 8,
              locator: "p. 140",
            },
          ],
        },
      ],
      strategist: [
        {
          text: "Test the opposite. The record does not show a court of silent men. Caulaincourt, Davout, Soult, Reille, Berthier, Narbonne and Thibaudeau all told him no, some repeatedly, and several survived it well. The real problem was that nobody’s objection had any consequence unless he chose to give it one. Chaptal describes the removal of the one institution that could impose a cost: when the Tribunate’s reasoned opposition irritated him he abolished it, and told Chaptal that evening that there was now no constitution. After that, disagreement depended on the Emperor’s mood.",
          evidence: "interpretation",
          refs: [
            {
              source: 4,
              locator: "p. 212",
            },
            {
              source: 5,
              locator: "pp. xxv–xxvi",
            },
          ],
        },
        {
          text: "Hindsight flatters the dissenters. Davout’s march might have failed, as Napoleon feared, and no one knows. Reille’s advice was good, but it came on the morning of the battle, when the plan could hardly be remade. There is a real difference between a council before the decision, where doubt is useful, and the hour before the attack, where a commander has reasons not to let generals hear their chief’s opinion questioned. Napoleon’s failure at Waterloo may have been less the brusque reply than the absence of any earlier occasion on which Reille’s knowledge of the English might have shaped the plan.",
          evidence: "interpretation",
          refs: [
            {
              source: 3,
              locator: "pp. 163–164",
            },
            {
              source: 1,
            },
            {
              source: 2,
            },
          ],
        },
        {
          text: "The practical damage shows in Duroc’s advice. Give way on certain points, he says, and you will lead him more easily. That is good counsel for a courtier and very bad news for an organisation. It teaches able people to manage the chief instead of informing him, and it makes every piece of information that reaches him a piece of tactics. By 1812 the Emperor’s closest servants were doing exactly what a sensible person would do in their position, and that was the problem.",
          evidence: "interpretation",
          refs: [
            {
              source: 0,
              locator: "pp. 19–20",
            },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Psychological safety",
          base: "single study",
          text: "Edmondson defines team psychological safety as a shared belief that the team is safe for interpersonal risk taking, and a study of 51 work teams in a manufacturing company found it associated with learning behaviour. As an illustration, Caulaincourt’s remark that nobody contradicted the Emperor for amusement describes the reverse condition with some precision. Speaking up had a price, and people who kept paying it were unusual. Duroc’s advice looks like a rational adjustment to that price.",
          evidence: "interpretation",
          refs: [
            {
              source: 9,
            },
            {
              source: 0,
              locator: "pp. 19–20, 32–33",
            },
          ],
          limit:
            "Read in abstract only. A correlational finding from factory teams is not a measure of a court and a headquarters, and it cannot say what any individual felt.",
        },
        {
          mechanism: "Power and other people’s perspectives",
          base: "review",
          text: "Keltner, Gruenfeld and Anderson review evidence that elevated power goes with attention to rewards and more disinhibited behaviour. In experiments by Galinsky and colleagues, people primed to feel powerful were less likely to take account of what others did not know. It is tempting to read Marmont’s ten thousand men this way, with a commander so anchored in his own picture that a correction would not stick. But the same man would interrogate a returning ambassador for five hours. Power may have made him worse at some kinds of listening without making him incapable of it.",
          evidence: "interpretation",
          refs: [
            {
              source: 10,
            },
            {
              source: 11,
            },
            {
              source: 7,
              locator: "p. 98",
            },
            {
              source: 0,
              locator: "pp. 9–10",
            },
          ],
          limit:
            "Both read in abstract only, and no record of replications was read. Feeling powerful for a few minutes in a laboratory is not the same thing as twenty years of command, and the Marmont story is third-hand.",
        },
      ],
      shadow: {
        text: "Napoleon built the room in which he later could not hear. He kept his generals at a distance, as Chaptal says, and rewarded them with fortunes that tied them to his survival. He abolished the body that could oppose him. When a warning came he treated it as a defect in the speaker, and Gourgaud’s pages show the habit lasting into exile, with Caulaincourt, who had been right, dismissed as a man of no ability. Metternich’s account has him throwing his hat into the corner when he was told an unwelcome truth. A leader who responds like this does not need to punish anybody.",
        evidence: "interpretation",
        refs: [
          {
            source: 4,
            locator: "pp. 212, 247–248",
          },
          {
            source: 8,
            locator: "p. 140",
          },
          {
            source: 12,
            locator: "p. 190",
          },
        ],
      },
      counterCase: {
        text: "At Fili on 13 September 1812 Kutuzov took the decision to abandon Moscow in a council of war. The Fondation’s chronology, following Lieven, says he had already reached that conclusion and that agreement had to be secured before the retreat was ordered. Bennigsen, who had been charged with choosing a field for the defence, wrote afterwards that Barclay and Kutuzov were the guilty parties. It was not a free vote, but the decision was argued and had to be owned. Blücher’s headquarters went further. Müffling describes proposals worked up and argued before they reached the field marshal, and the Neue Deutsche Biographie says that the shares of Blücher and Gneisenau in Prussian operations can never be clearly separated. Neither arrangement guaranteed a correct decision. Each made it harder for one person’s certainty to go unexamined.",
        evidence: "interpretation",
        refs: [
          {
            source: 13,
          },
          {
            source: 14,
            locator: "pp. 94–95",
          },
          {
            source: 15,
          },
        ],
        commanderSlug: "mikhail-kutuzov",
        battleSlugs: ["borodino", "waterloo"],
      },
      cost: {
        text: "A warning that is not heard is paid for by those who were not in the room. Reille told Napoleon what a frontal attack on English infantry would cost, and that afternoon the columns went forward. Bourgogne, standing with the Guard at Borodino, heard the reports reach the Emperor one after another, that such a general had been killed and another put in his place. Caulaincourt had warned of an army worn out by marching without the chance to fight, and that is what the road to Moscow did to the men who took it.",
        evidence: "fact",
        refs: [
          {
            source: 3,
            locator: "pp. 163–164",
          },
          {
            source: 16,
            locator: "ch. I",
          },
          {
            source: 0,
            locator: "pp. 32–33",
          },
        ],
      },
      transfer: {
        holdsWhen: [
          "A record of success has made the leader’s judgement harder to question.",
          "Objections cost the person making them and have no formal route.",
        ],
        failsWhen: [
          "The moment demands immediate execution, and argument would only spread doubt.",
          "The dissent itself is weakly informed, or is someone’s way of protecting a position.",
        ],
        questions: [
          "Who told you no in the past year, and what happened to them?",
          "What does anyone gain by bringing you bad news early?",
          "Where is the point in your process at which a decision can still be changed?",
        ],
      },
      bearsOn:
        "The contradictions are spread across the whole career, so this does not look like a late decline. Thibaudeau was sent away in 1803, and the Tribunate was abolished in the years of success. What grew after 1812 was the price of the habit, because the margin for ignoring correct advice had gone.",
      questions: [
        {
          prompt: "What does the record suggest about dissent around Napoleon?",
          choices: [
            "Nobody ever disagreed with him.",
            "Several people did, but objection had no consequence unless he allowed it.",
            "He always followed the advice of his marshals.",
          ],
          answer: 1,
          explanation:
            "Caulaincourt, Davout, Reille, Berthier and Thibaudeau all objected at various times.",
        },
        {
          prompt: "What did Duroc advise Caulaincourt to do?",
          choices: [
            "Resign at once.",
            "Report the Emperor to the Senate.",
            "Give way on certain points, since that was an easier way to lead him.",
          ],
          answer: 2,
          explanation:
            "That is sensible personal advice and poor practice for the organisation.",
        },
        {
          prompt:
            "Why is Davout’s proposal at Borodino a weak example of suppressed dissent?",
          choices: [
            "It was made, argued and rejected for a stated reason: that the flank march might let the Russians escape.",
            "Davout never made such a proposal.",
            "Napoleon adopted it in full.",
          ],
          answer: 0,
          explanation: "No one knows whether the march would have worked.",
        },
      ],
      seminar: {
        prompt:
          "You advise a very successful chief who dislikes contradiction. What single change would you ask them to make, and why that one?",
        guidance:
          "Think about when in a decision objections would be heard, who would be protected for making them, and how you would know that it was working. Say what would make your proposal useless in an emergency.",
      },
      sources: [
        s.caulaincourt,
        s.linden,
        s.borodino,
        s.houssaye,
        s.chaptal,
        s.thibaudeau,
        s.gambiez,
        s.stanhope,
        s.gourgaud,
        s.edmondson,
        s.keltner,
        s.galinsky,
        s.metternich,
        s.fili,
        s.muffling,
        s.blucherNdb,
        s.bourgogne,
      ],
    },
    {
      slug: "the-last-reserve",
      title: "The last reserve",
      part: "The limits of the self",
      themes: ["judgement", "restraint"],
      claim:
        "When only one reserve remains, how a leader spends it shows how they weigh future options against present losses.",
      moment: {
        text: "Sergeant Bourgogne spent the day of Borodino with the Imperial Guard, near enough to hear what was reported to the Emperor. Generals were being killed and replaced, one after another, in front of the great redoubt. “While the fighting lasted, we were placed in reserve,” he wrote, and the shot fell among their ranks and round the Emperor all the same. Around midday, Caulaincourt says, Napoleon was showing signs of anxiety. He told those around him that they would win, and that it would not be conclusive unless he took prisoners. His best soldiers were standing behind him, fresh, and the question of what they were for had become urgent.",
        evidence: "fact",
        refs: [
          {
            source: 0,
            locator: "ch. I",
          },
          {
            source: 1,
            locator: "p. 99",
          },
        ],
      },
      episodes: [
        {
          title: "Borodino: held back",
          text: "Britannica says that by noon on 7 September 1812 the French artillery had begun to tip the scales, but that successive attacks were not strong enough to overwhelm the Russians. Napoleon, distant from a field covered in smoke and perhaps unsure of the situation, refused to commit the Guard. The Fondation’s chronology says his officers were divided: Murat, Davout and Ney wanted it used to finish the battle, while Berthier, Duroc and Bessières opposed that, fearing the effect on opinion in Paris of heavy loss to such a corps. Caulaincourt shows the Young Guard being pushed forward in support during the afternoon, so the familiar statement that the Guard stayed out is a simplification.",
          evidence: "fact",
          refs: [
            {
              source: 2,
            },
            {
              source: 3,
            },
            {
              source: 1,
              locator: "pp. 99–101",
            },
          ],
          battleSlugs: ["borodino"],
        },
        {
          title: "Krasnoe: what the Guard was kept for",
          text: "Ten weeks later the army was retreating along a devastated road, and near Krasnoe a Russian force was waiting beside the road. Caulaincourt writes that the soldierly conduct and unity of the Guard reassured Napoleon about the consequences of any engagement. The Young Guard and part of the Old were sent against the Russians and kept the road open. This is the best evidence in favour of the decision at Borodino. A commander who had spent his last formation in September would have had nothing left to send in November. It does not tell us whether a decisive victory in September would have made November unnecessary.",
          evidence: "fact",
          refs: [
            {
              source: 1,
              locator: "p. 216",
            },
          ],
          battleSlugs: [],
          campaignSlugs: ["russian-campaign-of-1812"],
        },
        {
          title: "Ligny: spent at the right moment",
          text: "On 16 June 1815 Napoleon had begun moving the Guard against Ligny when an unidentified column appeared on his flank, and he suspended the movement and brought the Guard back until he knew what it was. Blücher saw the counter-march, took it for hesitation, ordered forward his last reserves and led them himself. When the Guard went in again, the Prussian reserves had been used elsewhere, and it came through a wide breach. Houssaye’s account shows both sides of the problem in one afternoon: the same reserve held back on doubtful information, and committed when the information cleared. The Prussian army was beaten, but it stayed in being.",
          evidence: "fact",
          refs: [
            {
              source: 4,
              locator: "pp. 95–100",
            },
          ],
          battleSlugs: ["ligny"],
        },
        {
          title: "Waterloo: committed too late",
          text: "At about six o’clock on 18 June La Haye Sainte fell and Wellington’s centre was in serious danger. Ney asked for infantry. “Troops!” Napoleon answered, in Houssaye’s telling; where did he think he could get them? He still had battalions of the Old and Middle Guard, and Houssaye thinks that half of them might have broken the allied centre at that moment. But the Prussians were on his flank and Plancenoit was falling, and the Guard went there first. Only after seven did he release battalions to Ney. By then, Britannica says, Wellington had reorganised. The National Army Museum says they went up where he was strongest. They stopped under fire and broke.",
          evidence: "fact",
          refs: [
            {
              source: 4,
              locator: "pp. 200–201",
            },
            {
              source: 5,
            },
            {
              source: 6,
            },
          ],
          battleSlugs: ["waterloo"],
        },
      ],
      witnesses: [
        {
          who: "Encyclopaedia Britannica",
          stake: "A general reference, giving a settled modern judgement.",
          says: "Because Kutuzov had already committed every available man, Napoleon forfeited the chance of a decisive rather than a narrow victory.",
          refs: [
            {
              source: 2,
            },
          ],
        },
        {
          who: "The Fondation Napoléon’s chronology",
          stake: "A specialist body, more cautious on the same point.",
          says: "It records that historians still argue about what committing the Guard would actually have achieved.",
          refs: [
            {
              source: 3,
            },
          ],
        },
        {
          who: "Henry Houssaye",
          stake:
            "A French patriot writing a dramatic narrative, who cites an English historian in support.",
          says: "Napoleon, without a reserve of cavalry, did not think he had too many men, even with all his bearskins, to hold his own position, and the moment was as critical for him as it was for Wellington.",
          refs: [
            {
              source: 4,
              locator: "p. 201",
            },
          ],
        },
        {
          who: "Napoleon’s proclamation before Borodino",
          stake: "Written to make men fight.",
          says: "Victory depended on their efforts and was essential. It would bring abundance, good winter quarters and a speedy return home.",
          refs: [
            {
              source: 7,
              locator: "pp. 353–354",
            },
          ],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, keeping the Guard at Borodino was defensible. Napoleon was at the far end of a line of communication, the army had been worn away on the march, and he could not know that Kutuzov had nothing left. Britannica’s judgement relies on knowledge he did not have. A reserve exists to pay for something later, and he had reason to expect a later. Those who wanted to use it were, understandably, the marshals who could see their own attacks failing. Those who opposed it were closest to his own position and to the question of what would remain afterwards.",
          evidence: "interpretation",
          refs: [
            {
              source: 2,
            },
            {
              source: 3,
            },
            {
              source: 7,
              locator: "p. 353",
            },
          ],
        },
        {
          text: "The difficulty is that a reserve is also a means of buying a decision, and he had told his army that this was the decision. If the proclamation is taken at its word, the battle had to deliver peace, quarters and the road home. A commander who believes that should spend what is needed to get it. One who does not believe it should ask why he is fighting here. Holding the Guard may have been correct, and the battle may have been wrong, in the sense that it could not by his own standard be made worth what it cost. The tension lies between the two positions, and he left it unresolved.",
          evidence: "interpretation",
          refs: [
            {
              source: 7,
              locator: "pp. 353–354",
            },
            {
              source: 1,
              locator: "p. 99",
            },
          ],
        },
        {
          text: "Ligny and Waterloo show what a reserve actually depends on. At Ligny the column that froze the Guard turned out to be d’Erlon’s, and he had time to recover. At Waterloo the threat was real and it had arrived. The Prussian advance claimed a large part of the reserve before he could spend it where he wanted, and it took away the one thing the commitment needed, which was timing. By seven o’clock he had nothing to lose by attacking, which is a different thing from having good reasons to expect that it would succeed. Spent earlier, it might have been decisive, and it might simply have left Plancenoit open.",
          evidence: "interpretation",
          refs: [
            {
              source: 4,
              locator: "pp. 95–100, 200–201",
            },
            {
              source: 5,
            },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Risk when ahead and when behind",
          base: "theory",
          text: "Kahneman and Tversky reported that people tend towards risk aversion in choices involving sure gains and towards risk seeking in choices involving sure losses. It is tempting to apply this directly: ahead on the field at Borodino he held on, while facing ruin at Waterloo he threw in the Guard. As an illustration of how the same person can weigh risk differently from two positions, it is useful. As an explanation it fails quickly, because at Ligny he was ahead and committed the Guard, and a military reason exists for each of these decisions without any need for a bias.",
          evidence: "interpretation",
          refs: [
            {
              source: 8,
            },
            {
              source: 4,
              locator: "pp. 95–100",
            },
          ],
          limit:
            "Read in abstract only. The theory is built on choices among stated gambles, and it cannot explain one commander’s decision on one afternoon, when neither the odds nor the outcomes could be stated.",
        },
      ],
      shadow: {
        text: "The Guard was a military formation and also an emblem, and the sources let us see that second role affecting the calculation. Berthier, Duroc and Bessières were thinking about opinion in Paris. And at Waterloo Britannica describes how its repulse, followed by the general allied advance and further Prussian attacks, threw the army into panic. A reserve that has been raised to that level of reputation has an additional effect when it fails. Keeping it safe in order to protect that reputation, and later sending it forward as a last appeal to the army’s faith, can both be ways of using soldiers as a symbol.",
        evidence: "interpretation",
        refs: [
          {
            source: 3,
          },
          {
            source: 5,
          },
          {
            source: 6,
          },
        ],
        battleSlugs: ["borodino", "waterloo"],
      },
      counterCase: {
        text: "Kutuzov at Borodino did what Napoleon would not. Britannica says he committed every available man. He then withdrew in the night with his army badly mauled but in being. Holding nothing back was a more reasonable risk for a commander who could retreat into his own country. Wellington at Waterloo had almost no reserve left by evening. Houssaye has him telling officers that there were no orders except to hold out to the last man, and sending aides to hurry the Prussians. His remaining hope was an ally on the march. Both took risks that their conditions made possible.",
        evidence: "interpretation",
        refs: [
          {
            source: 2,
          },
          {
            source: 4,
            locator: "p. 200",
          },
          {
            source: 5,
          },
        ],
        commanderSlug: "mikhail-kutuzov",
        battleSlugs: ["borodino", "waterloo"],
      },
      cost: {
        text: "Reserves are often discussed as though they were sums of money. At Borodino a formation held back was under fire all day, as Bourgogne says, while the men who were not held back went against the redoubts. Caulaincourt’s brother was killed coming out of the Great Redoubt, and Caulaincourt was standing beside the Emperor when the report arrived. Each hour that a reserve is withheld is an hour in which others go on doing the work that it might have finished. Spending it means that nothing remains for the army’s next danger.",
        evidence: "fact",
        refs: [
          {
            source: 0,
            locator: "ch. I",
          },
          {
            source: 1,
            locator: "pp. 99–100",
          },
        ],
      },
      transfer: {
        holdsWhen: [
          "There is one uncommitted resource left, and spending it cannot be undone.",
          "The leader must choose without knowing how close the other side is to breaking.",
        ],
        failsWhen: [
          "More resources can be had in time, so nothing is really final.",
          "The decision is made for you by a new threat that consumes the reserve.",
        ],
        questions: [
          "What is your last reserve, and what would you have to see before you spent it?",
          "Have you said this moment is decisive? Does your use of resources agree?",
          "Which future are you protecting by holding back, and how likely is it?",
        ],
      },
      bearsOn:
        "Between Borodino and Waterloo his skill with the reserve does not obviously decline, since Ligny lies very close to the end. What shrank was the room for it. At Borodino he could afford a debate about the next campaign. At Waterloo the Prussians had already decided how much of the Guard he would be allowed to use.",
      questions: [
        {
          prompt: "Why is “the Guard stayed out at Borodino” a simplification?",
          choices: [
            "Caulaincourt shows the Young Guard being pushed forward in support during the afternoon.",
            "The Guard was not present at the battle.",
            "The Old Guard led the first attack.",
          ],
          answer: 0,
          explanation: "The debate concerns the main body of the Guard.",
        },
        {
          prompt:
            "What is the best evidence in favour of keeping the Guard at Borodino?",
          choices: [
            "That Kutuzov had a large reserve remaining.",
            "That it later kept the road open during the retreat, as at Krasnoe.",
            "That the battle was decisive.",
          ],
          answer: 1,
          explanation:
            "It does not settle whether a decisive result in September would have made the retreat unnecessary.",
        },
        {
          prompt:
            "Why does Ligny weaken a prospect-theory reading of these decisions?",
          choices: [
            "Napoleon was absent from Ligny.",
            "No Guard units were at Ligny.",
            "He was ahead, and still committed the Guard.",
          ],
          answer: 2,
          explanation:
            "A military reason is available for each decision without any bias.",
        },
      ],
      sourceCheck: {
        question: "Would committing the Guard have won at Borodino?",
        witnesses: [
          {
            label: "Encyclopaedia Britannica",
            claim:
              "Kutuzov had committed every available man, so Napoleon forfeited the chance of a decisive victory.",
          },
          {
            label: "Fondation Napoléon chronology",
            claim:
              "His officers were divided, and historians continue to debate what its engagement would have achieved.",
          },
        ],
        prompt: "What can safely be said?",
        options: [
          {
            text: "That it would certainly have destroyed the Russian army.",
            feedback:
              "Britannica speaks of a chance. No source can run the battle again.",
          },
          {
            text: "That the Russians had little left, that he could not know that, and that the result of committing it is unknown.",
            feedback:
              "Yes. This separates what was true from what he knew and from what would have happened.",
            best: true,
          },
          {
            text: "That it would have made no difference.",
            feedback: "That is as unprovable as the opposite claim.",
          },
        ],
        battleSlug: "borodino",
      },
      seminar: {
        prompt:
          "Try the Simulator’s exercise “Commit the Guard?”, and decide. Then write down what you would have needed to know to change your answer.",
        guidance:
          "Separate what Napoleon knew at the time from what Britannica knows now. Say which future you were protecting and how much of it depended on the Guard.",
      },
      sources: [
        s.bourgogne,
        s.caulaincourt,
        s.borodino,
        s.fili,
        s.houssaye,
        s.hundredDays,
        s.nam,
        s.corsican,
        s.prospect,
      ],
    },
    {
      slug: "when-the-leader-leaves",
      title: "When the leader leaves",
      part: "The limits of the self",
      themes: ["ethics", "motivation"],
      claim:
        "When a leader leaves those they led, the decision may be rational and still break the bond that made them follow.",
      moment: {
        text: "On 19 August 1799 Bonaparte wrote from Menouf to General Kléber telling him to start for Rosetta at once, because there were matters of extreme importance to discuss. Three days later, from Alexandria, he wrote that he was leaving that night for France, and enclosed an order placing Kléber in command of the army. He left Egypt, he said, with the deepest regret. In mind and heart he would remain with them. “The army I am leaving you is made up of my children,” he wrote. Kléber had not asked for this, and the Fondation’s biography calls it for him, as for many others, a total surprise.",
        evidence: "fact",
        refs: [
          {
            source: 0,
            locator: "pp. 104–105",
          },
          {
            source: 1,
          },
        ],
      },
      episodes: [
        {
          title: "Egypt, August 1799",
          text: "He had just beaten the Turkish army at Aboukir. He had English papers showing that Italy was lost, and Lentz records his own later remark that the pear was ripe. Battesti sets out the possibilities. Had he deserted his post to serve his ambition? Had he concluded that the policy had failed? Or did he believe he could save the position by sending help from France? What he left was, on paper, formidable: an army of some twenty-two thousand, with artillery and munitions, in a country largely pacified. Its men, Battesti says, feared dying in Africa with no news of home. Kléber’s proclamation of 29 August had to tell them that help or an honourable peace was coming.",
          evidence: "fact",
          refs: [
            {
              source: 0,
              locator: "p. 104",
            },
            {
              source: 2,
            },
            {
              source: 3,
            },
          ],
          battleSlugs: ["aboukir-1799"],
        },
        {
          title: "Kléber’s report",
          text: "Kléber was deeply shocked by what Battesti, in inverted commas, calls the “fuite”. He thought himself tricked by a man who had gone in order not to carry responsibility for a surrender. As he learned the true state of affairs his anger grew, and his report to the Directory of 26 September is, Battesti says, a formal indictment: the army halved, without arms, powder or iron, naked, exhausted and decimated by disease. That was also useful, since Kléber was preparing opinion for evacuation. His popularity with the army, Battesti adds, was what finally calmed the soldiers’ anger and fear.",
          evidence: "fact",
          refs: [
            {
              source: 3,
            },
          ],
          battleSlugs: [],
        },
        {
          title: "Smorgoni, December 1812",
          text: "On 5 December Napoleon dictated his final orders. He would go at ten that night, with an escort from the Guard, and the marshals were to come to headquarters at seven. Britannica says he handed the command to Murat and hurried on to reach Paris before the news of his disaster. Ganière gives the case: he knew of Malet’s attempted coup, expected the 29th Bulletin to cause alarm, foresaw that Germany might rise, and judged that only he could raise, arm and organise a new army. The marshals approved. He had told Caulaincourt that, as things stood, he could keep his hold on Europe only from the Tuileries.",
          evidence: "fact",
          refs: [
            {
              source: 4,
              locator: "pp. 261–262, 265–266",
            },
            {
              source: 5,
            },
            {
              source: 6,
            },
          ],
          battleSlugs: ["berezina"],
          campaignSlugs: ["russian-campaign-of-1812"],
        },
        {
          title: "Fontainebleau, April 1814",
          text: "After the abdication he took his leave in public. On 20 April, at about half past eleven, he came down the great horseshoe staircase and spoke to his Guard. The Fondation notes that several versions of the speech have reached us. The text Johnston prints has him saying that he had sacrificed all their interests to those of the country, that they must go on serving France, and that he meant to write down the great things they had done together. “Good-bye, my children!” Here he had no battle left to win and nobody to desert. He stood in front of them and said it, and then he went south, where the crowds soon turned from a timid welcome to insults.",
          evidence: "fact",
          refs: [
            {
              source: 7,
            },
            {
              source: 0,
              locator: "pp. 440–441",
            },
          ],
          battleSlugs: [],
          campaignSlugs: ["campaign-in-france-1814"],
        },
      ],
      witnesses: [
        {
          who: "Sergeant Bourgogne",
          stake: "A loyal grenadier of the Guard, still marching.",
          says: "Reaching Smorgoni, he learned the Emperor had gone. Many foreigners blamed him, he says, but “the step he took was a perfectly natural one”. He adds that those loudly complaining may have been English agents.",
          refs: [
            {
              source: 8,
              locator: "pp. 213–214",
            },
          ],
        },
        {
          who: "Caulaincourt, in the sledge with him",
          stake:
            "A companion on the journey who had already told him that Vilna could not hold.",
          says: "Once in the Duchy of Warsaw the Emperor became very cheerful and talked constantly. He had no doubt that the army would stay at Vilna, and did not grasp the extent of his losses.",
          refs: [
            {
              source: 4,
              locator: "pp. 276–277",
            },
          ],
        },
        {
          who: "Michèle Battesti",
          stake:
            "A historian of the expedition, who frames the case for and against.",
          says: "The choice of Kléber was a choice of the most competent and popular man in the army, and whether the expedition’s failure was inevitable remains the open question.",
          refs: [
            {
              source: 3,
            },
          ],
        },
        {
          who: "Thierry Lentz",
          stake:
            "A historian at the Fondation, sceptical of the Egyptian myth.",
          says: "Bonaparte heard that events were moving fast in France and decided to return to seize the opportunity.",
          refs: [
            {
              source: 2,
            },
          ],
        },
      ],
      strategist: [
        {
          text: "The case for leaving is strong, and it should be stated fully. In December 1812 the army was past being commanded in any useful sense, and the Empire needed a head. A failed coup had just shown how much rested on the rumour of his death. New forces had to be raised before Germany turned, and nobody else had the authority to do it. In 1799 he could do little more for a cut-off army in Egypt, while Italy was lost and France was in crisis. Remaining at Smorgoni would have been a fine gesture, and would have helped the men on that road very little.",
          evidence: "interpretation",
          refs: [
            {
              source: 6,
            },
            {
              source: 0,
              locator: "p. 104",
            },
          ],
        },
        {
          text: "The case against is also strong. He left command in 1812 to Murat, and Ganière says he could not have made a worse choice, since the King of Naples thought only of saving his throne. Gambiez notes that Berthier was against it too. The orders he left assumed an army that would stop at Vilna, against Caulaincourt’s advice, and he was still sure of that in the sledge. In Egypt he left under secrecy, and the man he left in charge believed he had been deceived. He may have been right to go, and he left badly on both occasions, in the sense that the people left behind were not given a true account of what was now expected of them.",
          evidence: "interpretation",
          refs: [
            {
              source: 6,
            },
            {
              source: 9,
            },
            {
              source: 4,
              locator: "pp. 262, 266–267, 276–277",
            },
            {
              source: 3,
            },
          ],
        },
        {
          text: "These two cases do not cancel each other out, and the lesson depends on keeping both. A decision can be right for the institution and wrong for the relationship that made the institution possible. The army that followed him did so in part because he had shared their danger and could speak of it, as an earlier lesson showed. Going away was a statement about whose survival came first. Bourgogne’s loyalty shows that this statement did not have to be fatal. Kléber’s reaction shows what it could do to a senior man who had to explain it.",
          evidence: "interpretation",
          refs: [
            {
              source: 8,
              locator: "pp. 213–214",
            },
            {
              source: 3,
            },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "A broken understanding of what is owed",
          base: "single study",
          text: "Robinson and Rousseau studied graduate management alumni surveyed at graduation and two years later. A majority reported that employers had violated the reciprocal obligations they understood to exist. Violations were associated with lower trust and with more people leaving. Kléber’s feeling of having been tricked looks like the same thing in a harsher setting: an understanding about mutual obligations, not written down, that one side had ended without notice. The analogy is weak, and this lesson uses it only to separate the fact of departure from the feeling that a promise has been broken.",
          evidence: "interpretation",
          refs: [
            {
              source: 10,
            },
            {
              source: 3,
            },
          ],
          limit:
            "Read in abstract only, and based on 128 management graduates and their jobs. It says nothing about war, and the soldiers’ responses were clearly varied, as Bourgogne’s own loyalty shows.",
        },
      ],
      shadow: {
        text: "“My children” appears in the letter to Kléber of 1799 and in the farewell of 1814. It was the language in which he asked men to die, and he also used it when he was leaving. On his return from Syria earlier in 1799 he had already left behind men sick with the plague, for which Lentz says he went on being criticised. Each departure could be defended, and each was described by the person leaving. At the end of August 1799 the soldiers in Egypt were told he had gone for their own good, by a general who privately thought otherwise.",
        evidence: "interpretation",
        refs: [
          {
            source: 0,
            locator: "pp. 105, 440–441",
          },
          {
            source: 2,
          },
          {
            source: 3,
          },
        ],
        battleSlugs: ["aboukir-1799", "berezina"],
      },
      counterCase: {
        text: "When the Serbian army retreated across the mountains in the winter of 1915, its old king went with it. Peter I, already incapacitated by age and poor health and no longer exercising power, took part in the retreat to the Adriatic, Britannica says, carried in a litter. Putnik, the commander-in-chief, shared the retreat in a sedan chair. Bjelajac records that the remnants gathered on Corfu, were reorganised and went back to fight on the Salonika front. No source read proves that the presence of these men held the army together, and they had no capital left to save. But it is the exact opposite of Smorgoni.",
        evidence: "interpretation",
        refs: [
          {
            source: 11,
          },
          {
            source: 12,
          },
          {
            source: 13,
          },
        ],
        commanderSlug: "radomir-putnik",
        battleSlugs: ["serbian-retreat-1915"],
      },
      cost: {
        text: "The people who paid for these departures were those who stayed. Bourgogne describes the road after Smorgoni as being like a battlefield, so many were the dead. Men fell calling for help and nobody listened: “We had lost all sense of pity.” At Vilna, Caulaincourt says, people had been dancing at a ball while others froze. The survivors reached Kovno and crossed the Niemen under Russian pressure. In Egypt the army was left to fight on until its surrender in 1801, and Kléber was assassinated in June 1800, on the day of Marengo.",
        evidence: "fact",
        refs: [
          {
            source: 8,
            locator: "p. 213",
          },
          {
            source: 4,
            locator: "p. 273",
          },
          {
            source: 6,
          },
          {
            source: 2,
          },
        ],
      },
      transfer: {
        holdsWhen: [
          "People’s commitment has depended on the leader sharing their position.",
          "The leader goes while others must stay and bear the outcome.",
        ],
        failsWhen: [
          "The role requires the leader elsewhere, and everyone was told so in advance.",
          "Staying would be a gesture that changes nothing and costs more elsewhere.",
        ],
        questions: [
          "What have your people been led to believe you would share with them?",
          "If you had to leave, who would explain it, and could they do so honestly?",
          "Who are you trusting to take over, and is the choice about them or about you?",
        ],
      },
      bearsOn:
        "He did the same thing in 1799, at the start of his rise, and in 1812, so this is no sign of decline. The difference lies in the consequences. In 1799 the army he left was out of sight when he reached power. In 1812 the army he left was the Empire’s, and it did not come back.",
      questions: [
        {
          prompt: "What was Kléber’s reaction to the departure from Egypt?",
          choices: [
            "He had been told months earlier and approved.",
            "He felt tricked, and his report to the Directory was an indictment.",
            "He left for France on the same ship.",
          ],
          answer: 1,
          explanation:
            "The Fondation’s biography calls the appointment a total surprise to him.",
        },
        {
          prompt: "What did Napoleon wrongly assume when leaving Smorgoni?",
          choices: [
            "That the army would stop at Vilna.",
            "That Paris had already fallen.",
            "That Murat would refuse command.",
          ],
          answer: 0,
          explanation:
            "Caulaincourt told him otherwise and records him still sure of it in the sledge.",
        },
        {
          prompt: "How does this lesson treat the argument about Smorgoni?",
          choices: [
            "He was simply a deserter.",
            "He had no choice, so nothing can be said against it.",
            "The decision may have been right and may still have damaged the bond with the army.",
          ],
          answer: 2,
          explanation:
            "Bourgogne’s loyalty and Kléber’s anger both belong in the account.",
        },
      ],
      seminar: {
        prompt:
          "Draft the three sentences Napoleon should have told the army at Smorgoni. What can honestly be said, and what can’t?",
        guidance:
          "Consider what the security of the journey required, who should have been told, and what he actually knew about the state of Vilna. Say whether an honest message would have helped the men on the road.",
      },
      sources: [
        s.corsican,
        s.kleberBio,
        s.bp5,
        s.battesti,
        s.caulaincourt,
        s.retreat,
        s.ganiere,
        s.adieux,
        s.bourgogne,
        s.gambiez,
        s.robinson,
        s.peterI,
        s.putnik,
        s.bjelajac,
      ],
    },
  ],
};
