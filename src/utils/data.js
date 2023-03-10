const getInitialData = () => ([
  {
    id: 1,
    title: "React",
    body: "React membuat proses pembuatan antarmuka pengguna interaktif menjadi lebih mudah. Buat tampilan sederhana untuk setiap state di aplikasi Anda, dan React akan secara efisien memperbarui dan me-render hanya komponen yang diperlukan ketika data Anda berubah.",
    createdAt: '2023-03-10T04:27:34.572Z',
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: '2023-03-10T04:27:34.572Z',
    archived: false,
  },
  {
    id: 3,
    title: "Class Component",
    body: "Menggunakan keyword state dalam menangani state management.",
    createdAt: '2023-03-10T04:27:34.572Z',
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: '2023-03-10T04:27:34.572Z',
    archived: false,
  },
  {
    id: 5,
    title: "React adalah Js",
    body: "Karena logika pada komponen React ditulis langsung menggunakan JavaScript (bukan menggunakan templat), Anda dapat dengan mudah mengoper data melalui aplikasi Anda dan menempatkan state agar tetap berada di luar DOM.",
    createdAt: '2023-03-10T04:27:34.572Z',
    archived: true,
  },

]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
