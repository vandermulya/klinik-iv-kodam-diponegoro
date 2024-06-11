import React, { useState } from 'react'
import ObatList from '../components/Obat/ObatList'
import { Table } from "flowbite-react";
import DataTable from 'react-data-table-component'
import { dataobats } from '../assets/data/dataobat';

const columns = [
    {
        name: "Nama Obat",
        selector: row => row.nama,
        sortable: true,
    },
    {
        name: "Indikasi Umum",
        selector: row => row.indikasi
    },
    {
        name: "Komposisi",
        selector: row => row.komposisi
    },
    {
        name: "Dosis",
        selector: row => row.dosis
    },
    {
        name: "Aturan Pakai",
        selector: row => row.aturan
    },
    {
        name: "Efek Samping",
        selector: row => row.efek
    },
]

const myData = [
    {
        id: 1,
        nama: "Acetylcysteine",
        indikasi: "Terapi hipersekresi mukus kental dan tebal pada saluran pernapasan",
        komposisi: "Acetylcysteine 200 mg",
        dosis: "Dewasa & anak >14 tahun 2-3x1 kapsul/hari; anak 6-14 tahun 2x1 kapsul/hari",
        aturan: "Sesudah makan",
        efek: "urtikaria, bronspasme (jarang terjadi), psoriasis, mual,muntah, diare, stomatitis, pusing, tinitus",
    },
    {
        id: 2,
        nama: "Allopurinol",
        indikasi: "Gout, hiperurisemia",
        komposisi: "Allopurinol 100 mg, 300 mg",
        dosis: "Dewasa: awal 100 mg/hari, ditingkatkan per minggu 100 mg s/d dicapai kadar asam urat normal",
        aturan: "Sesudah makan",
        efek: "Ruam, gangguan saluran cerna, hepatotoksik, parestesia, neuropati, gangguan darah",
    },
    {
        id: 3,
        nama: "Ambroxol",
        indikasi: "Sebagai sekretolitik pada gangguan saluran napas akut dan kronik",
        komposisi: "Ambroxol HCL 30 mg",
        dosis: "Dewasa & anak >12 tahun 2-3x 30 mg /hari, Dosis yang dianjurkan untuk anak-anak 1,2-1,6 mg/kgBB/hari",
        aturan: "Sesudah makan",
        efek: "Gangguan saluran cerna ringan, reaksi alergi pada kulit, pembengkakan wajah, dispnea, demam",
    },
    {
        id: 4,
        nama: "Amlodipin",
        indikasi: "Hipertensi, angina pektoris",
        komposisi: "Amlodipin Besilate  5 mg, 10 mg",
        dosis: "Dosis awal 1x 5 mg/hari, ditingkatkan hingga maksimal 1x10 mg/hari",
        aturan: "Sebelum atau sesudah makan",
        efek: "Sakit kepala, edema, letih, somnolen, mual, nyeri perut, wajah memerah, palpitasi, pusing",
    },
    {
        id: 5,
        nama: "Antacida",
        indikasi: "Meringankan gejala-gejala akibat kelebihan asam lambung misalnya dispepsia, tukak, GERD",
        komposisi: "Aluminium Hidroksida 200 mg magnesium hidroksida 200 mg",
        dosis: "4xsehari 1-2 tablet",
        aturan: "Saat perut kosong/ 1-2 jam sesudah makan dikunyah",
        efek: "Gangguan saluran cerna, gangguan absorpsi fosfat , Hipermagnesemia (bila dikonsumsi oleh pasien gagal ginjal)",
    },
    {
        id: 6,
        nama: "Asam Mefenamat",
        indikasi: "Nyeri pada reumatik akut & kronis, luka jaringan lunak, pegal otot & sendi, dismenore, sakit kepala, gigi, nyeri pasca bedah",
        komposisi: "Asam Mefenamat 500 mg",
        dosis: "Dewasa 2-3 x 250-500 mg sehari",
        aturan: "Sesudah makan",
        efek: "Gangguan & perdarahan gastrointestinal, tukak peptik",
    },
    {
        id: 7,
        nama: "Betahistine Mesylate",
        indikasi: "Vertigo dan pusing pada penyakit Meniere, sindrome Meniere, dan vertigo perifer",
        komposisi: "Betahistine Mesylate 6 mg",
        dosis: "Dewasa 3xsehari 1-2 tablet",
        aturan: "Sesudah makan",
        efek: "Gangguan gastrointestinal, sakit kepala,  ruam kulit, gatal",
    },
    {
        id: 8,
        nama: "Bisakodil",
        indikasi: "Konstipasi, pembuangan sebelum dan sesudah operasi",
        komposisi: "Bisakodil 5 mg",
        dosis: "Dewasa &anak > 12 tahun 2 tablet dosis tunggal. Anak 6-12 tahun 1 tablet/hari sebelum tidur",
        aturan: "Sebaiknya diberikan pada saat perut kosong. Diminum sebelum tidur atau 30 menit sebelum makan pagi",
        efek: "Mual, kram usus, diare",
    },
    {
        id: 9,
        nama: "Bromhexine",
        indikasi: "Batuk yang memerlukan ekspektoran",
        komposisi: "Brohexine HCL 8 mg",
        dosis: "Dewasa & anak >10 tahun 3x1 tab; anak 5-10 tahun 3x1/2 tab; anak 2-5 tahun 2x1/2 tab",
        aturan: "Sesudah makan",
        efek: "Hipersensitivitas, syok dan reaksi analifaktik, bronkospasme, mual, diare, nyeri perut bagian atas, ruam, angioedema, urtikaria, pruritus",
    },
    {
        id: 10,
        nama: "Cetirizine",
        indikasi: "Penatalaksanaan gejala alergi seperti rinitis alergi menahun & musiman, urtikaria kronik",
        komposisi: "Cetitizine HCl 10 mg",
        dosis: "Dewasa & anak >12 tahun 1xsehari 1 tab; 6-11 tahun 1/2-1 tab/hari; 2-5 tahun 1/4-1/2 tab/hari",
        aturan: "Sebelum atau sesudah makan",
        efek: "Sakit kepala, pusing, mengantuk, agitasi, mulut kering, gangguan gastointestinal, reaksi hipersensitif seperti reaksi kulit dan angiodema",
    },
    {
        id: 11,
        nama: "Eperisone",
        indikasi: "Pengobatan simtomatik untuk keadaan yang berhubungan dengan spasme muskuloskeletal",
        komposisi: "Eperisone HCL 50 mg",
        dosis: "Dewasa 1 tablet 3x/hari",
        aturan: "Sesudah makan",
        efek: "Gangguan fungsi hati dan ginjal, gangguan gastrointestinal, gangguan saluran kemih, mengantuk, rasa kebas & gemetar, sakit kepala, lemah, lelah",
    },
    {
        id: 12,
        nama: "Loratadine",
        indikasi: "Meredakan gejala terkait rinitis alergi, urtikaria kronik, alergi kulit",
        komposisi: "Loratadine 10 mg",
        dosis: "Dewasa 1x10 mg/hari; anak 2-12 tahun BB<30 kg: 1x5 mg/hari BB>30 kg:1x10 mg/hari",
        aturan: "Sesudah makan",
        efek: "Lesu, nyeri kepala; sedasi dan mulut kering jarang",
    },
    {
        id: 13,
        nama: "Mecobalamin",
        indikasi: "Neuropati perifer",
        komposisi: "Mecobalamin 500 mcg",
        dosis: "3xsehari 500 mcg",
        aturan: "Sebelum atau Sesudah makan",
        efek: "Anoreksia, mual, diare, gangguan gastrointestinal",
    },
]

const DataObat = () => {
    const [records, setRecords] = useState(myData)

    function handleFilter(event) {
        const newData = myData.filter(row => {
            return row.nama.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setRecords(newData)
    }

    return (
        <>
        <div className='mx-auto max-w-lg flex flex-col justify-center my-12'>
            <h1 className='text-center text-2xl font-bold mb-12'>DATA OBAT</h1>
        </div>
        {/* <ObatList /> */}
        <div className="container mt-5">
            <div className="text-end">
                <input type="text" placeholder='Cari Obat' className='rounded-lg border-primaryColor' onChange={handleFilter} />
            </div>
            <DataTable columns={columns} data={myData} fixedHeader pagination>
            </DataTable>
        </div>
        </>
    )
}

export default DataObat