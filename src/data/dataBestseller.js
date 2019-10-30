const data = [
    {
        id: '1',
        productName: 'Vogue- Oversize Jacket',
        image_url: 'https://i.pinimg.com/564x/d3/2c/be/d32cbe69fdb987632431bcba29f78793.jpg',
        image_url2: 'https://i.pinimg.com/564x/97/84/79/978479beade95a7a69125c35a29955f5.jpg',
        image_url3: 'https://i.pinimg.com/564x/96/22/cc/9622cc726cb9d32360b52af661a5265f.jpg',
        image_url4: 'https://i.pinimg.com/564x/8a/63/55/8a63555be133ca039b2b0f4bfa4b5cc2.jpg',
        productPrice: 'Rp 400.000',
        category: 'pakaian',
        cat:'wanita',
        brand: 'Vogue',
        type: 'Oversize Black-Jacket',
        price: 400000,
        material_1: '- Striped textured pocket shirt',
        material_2: '- Collar neckline',
        material_3: '- Regular fit',
        material_4: '- Button fastening',
        material_5: '- Viscose',
        store: 'BLACKPINK'

    },
    // {
    //     id: "2",
    //     productName: "item 2",
    //     image_url: "https://dynamic.zacdn.com/juK3GMj35N41sFQoveidLojmGiU=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-7972-4642261-1.jpg",
    //     productPrice: "Rp 295.000",
    //     description: `Lorem ipsum dolor sit amet`,
    //     category: "wanita"

    // },
    // {
    //     id: "3",
    //     productName: "item 3",
    //     image_url: "https://dynamic.zacdn.com/0L9wvn0o3OuOfgNYCYMteUD64TU=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-8600-0632261-1.jpg",
    //     productPrice: "Rp 129.500",
    //     description: `Lorem ipsum dolor sit amet`,
    //     category: "wanita"

    // },
    {
        id: '4',
    productName: 'Osella',
    image_url: 'https://dynamic.zacdn.com/oExpFAtrN8RyflZS8KZHq5vh37s=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/osella-2935-9373271-1.jpg',
    image_url2: 'https://dynamic.zacdn.com/VqNIprAF4HxZLVp7vX9UFJzFhG8=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/osella-2936-9373271-2.jpg',
    image_url3: 'https://dynamic.zacdn.com/rNT7_eYlgbqlaFDj8CslhiAQkhQ=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/osella-2937-9373271-4.jpg',
    image_url4: 'data:image/jpeg;base64,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',
    productPrice: 'Rp 900.000',
    description: `Lorem ipsum dolor sit amet`,
    category: 'pakaian',
    cat:'pria',
    brand: 'Osella',
    type: 'Short-sleeved shirt',
    price: 907000,
    material_1: '- Striped textured pocket shirt',
    material_2: '- Collar neckline',
    material_3: '- Regular fit',
    material_4: '- Button fastening',
    material_5: '- Viscose',
    store: 'ZALORA'

    },
    // {
    //     id: "5",
    //     productName: "item 5",
    //     image_url: "https://dynamic.zacdn.com/dkv2jmr8CF5cX_yvfhAw994jGqg=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/osella-2838-6559871-1.jpg",
    //     productPrice: "Rp 129.500",
    //     description: `Lorem ipsum dolor sit amet`,
    //     category: "pria"
    // },
    // {
    //     id: "6",
    //     productName: "item 6",
    //     image_url: "https://dynamic.zacdn.com/S8tkg82kbrKYfV2huAarUL3fuJA=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/osella-1235-5114181-1.jpg",
    //     productPrice: "Rp 129.500",
    //     description: `Lorem ipsum dolor sit amet`,
    //     category: "pria"
    // },
    {
        id: "7",
        productName: "High Heels",
        image_url: "https://dynamic.zacdn.com/fGZYd0-NEnpA29SwF1uagsPXZ_Y=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-9128-7882461-1.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"
    },
    // {
    //     id: "8",
    //     productName: "item 8",
    //     image_url: "https://dynamic.zacdn.com/5rnyiBqIMh7fH0AA7zTHH5Pu0rk=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-3710-8882461-1.jpg",
    //     productPrice: "Rp 129.500",
    //     description: `Lorem ipsum dolor sit amet`,
    //     category: "wanita"
    // },
    // {
    //     id: "9",
    //     productName: "item 9",
    //     image_url: "https://dynamic.zacdn.com/cpsMitdRlblsk6hV49shODgtfhQ=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-3157-7946341-2.jpg",
    //     productPrice: "Rp 129.500",
    //     description: `Lorem ipsum dolor sit amet`,
    //     category: "wanita"
    // },
    // {
    //     id: "10",
    //     productName: "item 10",
    //     image_url: "https://dynamic.zacdn.com/qWlcmuYuPn9YNIV_BheKMonxLvI=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/homyped-1592-4633281-1.jpg",
    //     productPrice: "Rp 129.500",
    //     description: `Lorem ipsum dolor sit amet`,
    //     category: "pria"
    // },
    {
        id: "11",
        productName: "Sneakers",
        image_url: "https://dynamic.zacdn.com/-KemtgwowdiRRnyKvkvSTm0S4WE=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/homyped-7807-7836571-1.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "pria"
    },
    // {
    //     id: "12",
    //     productName: "item 12",
    //     image_url: "https://dynamic.zacdn.com/D4wfu6QRa66sH2gVtrqAMBIsk-4=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/cde-1822-9895161-1.jpg",
    //     productPrice: "Rp 129.500",
    //     description: `Lorem ipsum dolor sit amet`,
    //     category: "pria"
    // }
]

export default data
