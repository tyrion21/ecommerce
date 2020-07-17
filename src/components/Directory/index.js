import React from 'react';
import ShopManga from './../../assets/mangas.jpg';
import ShopAnime from './../../assets/animes.jpg';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopManga})`
                    }}
                >
                    <a>
                        Mangas
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopAnime})`
                    }}
                >
                    <a>
                        Animes
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;