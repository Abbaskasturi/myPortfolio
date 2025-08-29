import React from 'react';
import './index.css';

const socialLinksData = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/kasturiabbas',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/Abbaskasturi',
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/kasturi_abbas_patel/',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png'
    }
];

const SocialLinks = () => {
    return (
        <div className="social-links-container">
            {socialLinksData.map((social) => (
                <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" title={social.name}>
                    <div className="social-image-wrapper">
                        <img src={social.imgSrc} alt={`${social.name} Logo`} className="social-image" />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;