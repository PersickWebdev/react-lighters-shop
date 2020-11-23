import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import itemPicture01 from '../../assets/images/zippo-01.png';
import itemPicture02 from '../../assets/images/st-dupont-01.png';
import itemPicture03 from '../../assets/images/zippo-02.png';

const Home = () => {
    const theme = useSelector((state) => state.lighters.theme);

    return (
        <main className={classNames('home', {
            'home--light': theme
        })}>
            <h2 className='title'>
                Welcome to our store!
            </h2>
            <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id rutrum metus.
                Ut hendrerit neque aliquam, rutrum quam eu, consectetur nulla. Sed sed egestas odio.
                Maecenas elementum lobortis massa. Aliquam erat volutpat.
                Suspendisse congue turpis dolor. Vivamus ultricies finibus ante at tempus.
                Sed aliquet eget arcu non suscipit.
            </p>
            <p className='paragraph'>
                Donec aliquet nunc id eros laoreet, convallis laoreet mi tempus.
                Suspendisse scelerisque metus at sem sollicitudin, at elementum sem malesuada.
                In venenatis enim a turpis posuere dapibus. Aenean rhoncus et turpis quis consectetur.
                Aenean congue pharetra lorem, vitae condimentum orci consequat ut.
                Sed sem nulla, ultricies non vestibulum nec, commodo ut leo.
                Mauris suscipit tellus arcu, vitae pellentesque ante placerat ac.
                Nulla ac tristique risus. Aliquam sit amet lectus lacus.
            </p>
            <p className='paragraph'>
                Quisque sollicitudin diam at ante vehicula, ut gravida lacus accumsan.
                Praesent faucibus velit id interdum convallis. Maecenas purus tellus, congue vel erat nec, gravida laoreet enim.
                Curabitur quis iaculis justo, quis mollis ligula. Sed laoreet sollicitudin felis lacinia varius.
                Quisque scelerisque sit amet lacus ac condimentum. Nulla facilisi.
                Praesent luctus, ex a pulvinar aliquet, metus turpis feugiat quam, ac convallis nunc erat at lacus.
                Aliquam dolor velit, accumsan auctor dolor nec, faucibus varius libero. Fusce et aliquet lacus.
                Mauris scelerisque at dui sed cursus. Proin finibus iaculis lorem.
                Duis pellentesque gravida ipsum, vitae porttitor mi hendrerit sit amet.
                Vestibulum vitae pellentesque magna.
            </p>
            <div className='home__imagesBox'>
                <img className='home__image' src={itemPicture01} alt='picture-01'/>
                <img className='home__image' src={itemPicture02} alt='picture-02'/>
                <img className='home__image' src={itemPicture03} alt='picture-03'/>
            </div>
            <h2 className='title'>
                Some Information
            </h2>
            <p className='paragraph'>
                Donec aliquet nunc id eros laoreet, convallis laoreet mi tempus.
                Suspendisse scelerisque metus at sem sollicitudin, at elementum sem malesuada.
                In venenatis enim a turpis posuere dapibus. Aenean rhoncus et turpis quis consectetur.
                Aenean congue pharetra lorem, vitae condimentum orci consequat ut.
                Sed sem nulla, ultricies non vestibulum nec, commodo ut leo.
                Mauris suscipit tellus arcu, vitae pellentesque ante placerat ac.
                Nulla ac tristique risus. Aliquam sit amet lectus lacus.
            </p>
        </main>
    );
};

export default Home;