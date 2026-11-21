export interface ExperienceItem {
  id: string;
  number: string;
  windowLabel: string;
  category: string;
  italicSubtitle: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  modalTag: string;
  modalTitle: string;
  modalDescription: string;
  achievement: string;
  skills: string[];
  highlights: string[];
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  badge?: string;
  active?: boolean;
}

export interface FocusAreaItem {
  number: string;
  title: string;
  description: string;
  icon: 'chart' | 'bolt' | 'code' | 'film';
}

export const PORTRAIT_IMAGE_URL = '/assets/aistudio/poto_sopek_aa27bb78.jpeg';

export const HERO_STATS = [
  { value: '90.00', label: 'NILAI MA / SKALA 100' },
  { value: '3+', label: 'PERAN ORGANISASI & KEPANITIAAN' },
  { value: '4', label: 'BIDANG MINAT RISET' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'yearbook',
    number: '01',
    windowLabel: 'YEARBOOK.PROJECT // 2026',
    category: 'LEADERSHIP',
    italicSubtitle: 'Creative Direction',
    title: 'YEARBOOK ANGKATAN',
    role: 'Ketua Panitia',
    year: 'Tahun 2026',
    summary:
      'Bertanggung jawab penuh dalam memimpin tim produksi yearbook angkatan, mulai dari penyusunan konsep visual, penjadwalan sesi pemotretan, hingga pengawasan cetak akhir sesuai target waktu dan anggaran.',
    modalTag: 'ROLE DETAILS · 2026',
    modalTitle: 'Ketua Panitia — Yearbook Angkatan',
    modalDescription:
      'Memimpin lebih dari 15 anggota divisi kreatif, fotografi, logistik, dan editorial. Merumuskan konsep tema artistik angkatan, menyusun timeline produksi bertahap, dan mengelola alokasi anggaran cetak hingga serah terima buku tahunan.',
    achievement: 'Tuntas 100% tepat waktu sesuai kalender kelulusan.',
    skills: ['Team Leadership', 'Project Timeline Scheduling', 'Budgeting', 'Art Direction'],
    highlights: [
      'Koordinasi 15+ anggota lintas divisi kreatif, fotografi & editorial',
      'Penyusunan konsep visual & pengawasan kualitas cetak akhir',
      'Manajemen timeline dan anggaran produksi secara transparan',
    ],
  },
  {
    id: 'perjusa',
    number: '02',
    windowLabel: 'PERJUSA.PANITIA // 2025',
    category: 'ORGANIZATION',
    italicSubtitle: 'Field Coordination',
    title: 'PERJUSA 2025',
    role: 'Wakil Ketua Panitia',
    year: 'Tahun 2025',
    summary:
      'Perkemahan Kamis Jumat Sabtu (PERJUSA). Terlibat aktif dalam perencanaan, koordinasi teknis regu, serta menyukseskan rangkaian kegiatan perkemahan dan pembinaan karakter peserta secara tertib dan kondusif.',
    modalTag: 'ROLE DETAILS · 2025',
    modalTitle: 'Wakil Ketua Panitia — PERJUSA 2025',
    modalDescription:
      'Menjadi wakil pimpinan kepanitiaan Perkemahan Kamis Jumat Sabtu (PERJUSA) MA Almawaddah Blitar. Bertanggung jawab atas sinkronisasi teknis lapangan antar divisi acara, keamanan, konsumsi, dan tata tertib peserta.',
    achievement: 'Mengoordinasi ratusan peserta tanpa insiden teknis.',
    skills: ['Manajemen Lapangan', 'Problem Solving Darurat', 'Komunikasi Publik'],
    highlights: [
      'Sinkronisasi teknis antar divisi acara, keamanan, dan logistik',
      'Pengawasan jalannya agenda perkemahan selama 3 hari 2 malam',
      'Penanganan kendala lapangan secara cepat dan terstruktur',
    ],
  },
  {
    id: 'osis',
    number: '03',
    windowLabel: 'OSIS.ADMIN // 2024',
    category: 'ADMINISTRATION',
    italicSubtitle: 'Student Council',
    title: 'OSIS MA ALMAWADDAH',
    role: 'Sekretaris OSIS',
    year: 'Tahun 2024',
    summary:
      'Berperan dalam mengelola tata kelola administrasi kesekretariatan, notulensi rapat berkala, pengarsipan berkas dinas dan surat-menyurat, serta mendukung koordinasi pelaksanaan seluruh program kerja tahunan.',
    modalTag: 'ROLE DETAILS · 2024',
    modalTitle: 'Sekretaris OSIS MA Almawaddah',
    modalDescription:
      'Mengelola sistem pengarsipan surat dinas madrasah, membuat notulensi rapat evaluasi bulanan pengurus, menyusun draf proposal kegiatan siswa, serta menjembatani komunikasi administratif antara dewan pembina dan siswa.',
    achievement: 'Digitalisasi arsip persuratan organisasi secara terstruktur.',
    skills: ['Dokumentasi Administrasi', 'Microsoft Office Suite', 'Ketelitian Teknis'],
    highlights: [
      'Digitalisasi sistem pengarsipan surat masuk, surat keluar & proposal',
      'Penyusunan notulensi rapat evaluasi program kerja pengurus OSIS',
      'Koordinasi administratif antara pengurus, siswa, dan pembina',
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    period: 'SEP 2026 – SEKARANG',
    title: 'S1 Teknik Informatika',
    institution: 'Institut Teknologi PLN (ITPLN)',
    active: true,
  },
  {
    period: 'JUN 2023 – MEI 2026',
    title: 'MA Almawaddah Blitar',
    institution: 'Jurusan Ilmu Pengetahuan Alam (IPA)',
    badge: 'Nilai 90.00',
  },
  {
    period: '2020 – 2023',
    title: 'MTs Almawaddah Blitar',
    institution: 'Pendidikan Menengah Pertama',
  },
];

export const SKILLS_LIST: string[] = [
  'Python',
  'Web Dev (HTML/CSS)',
  'MS Excel / Word / PPT',
  'Analytical Thinking',
  'Problem Solving',
  'Komunikasi Teknis',
  'Kerja Sama Tim',
];

export const HOBBIES_LIST: string[] = [
  'Olahraga',
  'Editing Video/Foto',
  'Membaca Buku',
  'Travelling',
];

export const FOCUS_AREAS: FocusAreaItem[] = [
  {
    number: '01',
    title: 'DATA SCIENCE & ANALYTICS',
    description:
      'Pengolahan data, visualisasi insight, pemodelan statistik, serta penarikan kesimpulan berbasis pola untuk pengambilan keputusan.',
    icon: 'chart',
  },
  {
    number: '02',
    title: 'AI AGENT AUTOMATION',
    description:
      'Implementasi automasi alur kerja digital, eksplorasi Large Language Models (LLM), prompt engineering, dan agen cerdas mandiri.',
    icon: 'bolt',
  },
  {
    number: '03',
    title: 'SOFTWARE ENGINEERING',
    description:
      'Mempelajari fundamental algoritma, struktur data terarah, clean code, serta perancangan arsitektur aplikasi berbasis web modern.',
    icon: 'code',
  },
  {
    number: '04',
    title: 'CINEMATOGRAPHY & FILM',
    description:
      'Eksplorasi storytelling visual, komposisi sinematik, color grading, dan penyutradaraan pesan media multimedia.',
    icon: 'film',
  },
];

export const TERMINAL_PRESETS = [
  {
    id: 'agent',
    label: 'agent_pipeline.py',
    cmd: 'python agent_pipeline.py',
    output: 'status: 200 OK | ready for challenge.',
  },
  {
    id: 'data',
    label: 'data_explore.py',
    cmd: 'python data_explore.py --dataset itpln',
    output: 'insights: 4 patterns extracted | accuracy: 96.4%',
  },
  {
    id: 'film',
    label: 'render_reel.sh',
    cmd: './render_reel.sh --grade crimson-noir',
    output: 'export complete: 4K 24fps master ready.',
  },
];
