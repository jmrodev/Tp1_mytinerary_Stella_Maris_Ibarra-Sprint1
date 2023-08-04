import React from 'react'
import Card from '../Card/Index'


 function Index() {

    let data = [
        { href: "../../assets/Images/Buenos-aires.jpg", text: "Vibrante capital con arquitectura europea y tango en cada esquina.", title: "Buenos Aires" },
        { href: "../../assets/Images/Catedral-la-plata.jpg", text: "Impresionante catedral en la ciudad de La Plata, un ícono arquitectónico.", title: "La Plata" },
        { href: "../../assets/Images/Cordoba.jpg", text: "Córdoba, corazón estudiantil y cuna de la historia argentina.", title: "Córdoba" },
        { href: "../../assets/Images/Mar-del-plata.jpg", text: "Famosa ciudad costera con playas extensas y una animada vida nocturna.", title: "Mar del Plata" },
        { href: "../../assets/Images/Mendoza.jpg", text: "Región vinícola de fama mundial, paisajes montañosos y deliciosos vinos.", title: "Mendoza" },
        { href: "../../assets/Images/Rosario.jpg", text: "Atractiva ciudad a orillas del río Paraná, conocida por su estatua de la Bandera.", title: "Rosario" },
        { href: "../../assets/Images/Salta.jpg", text: "Salta, tierra de tradiciones y paisajes montañosos impresionantes.", title: "Salta" },
        { href: "../../assets/Images/San-juan.jpg", text: "San Juan, un paraíso para los amantes de la naturaleza y la aventura.", title: "San Juan" },
        { href: "../../assets/Images/Santa-fe.jpg", text: "Santa Fe, ciudad histórica y cultural a orillas del río Paraná.", title: "Santa Fe" },
        { href: "../../assets/Images/Tucuman.jpg", text: "Tucumán, cuna de la independencia argentina y rica herencia cultural.", title: "Tucumán" }

    ]

    return (
        <>
            <main>
                {data.map((city, index) => {
                    <Card key={index} href={city.href} text={city.text} title={city.title}
                    />
                })}
            </main>
        </>

    )
}
export default Index