import React, { useState } from 'react';

const Skills2 = () => {
    const [selectedLink, setSelectedLink] = useState('FullStack');

    const menuLinks = [
        { name: "FullStack", link: "#fullstack" },
        { name: "FrontEnd", link: "#frontend" },
        { name: "BackEnd", link: "#backend" },
    ];

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
        <div>
            <ul className="flex items-center justify-center gap-1 py-2 text-lg">
                {menuLinks?.map((menu, i) => (
                    <li key={i} className="px-6 btn-primary ">
                        <a href={menu?.link} onClick={() => handleLinkClick(menu?.name)}>
                            {menu?.name}
                        </a>
                    </li>
                ))}
            </ul>
            {selectedLink && (
                <h3 className='text-gray-400 py-2'>
                    {selectedLink === 'FullStack' && (
                        'HTML, CSS, JavaScript, React-Js, BootStrap, tailwind-css, Material-Ui, Axios, API design, Node-js, Express-Js, MongoDB'
                    )}
                    {selectedLink === 'FrontEnd' && (
                        'HTML, CSS, JavaScript, React-Js, BootStrap, tailwind-css, Material-Ui, Axios'
                    )}
                    {selectedLink === 'BackEnd' && (
                        'API design, Node-js, Express-Js, MongoDB'
                    )}
                </h3>
            )}
        </div>
    );
};

export default Skills2;
