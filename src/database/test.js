const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    await saveOrphanage(db, {
        lat: "-23.1849167",
        lng: "-45.9092199",
        name: "Lar de amor",
        about:
          "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
          whatsapp: "12996523691",
        images: [
          "https://images.unsplash.com/photo-1598454444376-77ab9c72b3b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
          "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visita das 18h às 8h",
        open_on_weekends: "0"
    })

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
    console.log(orphanage)
})