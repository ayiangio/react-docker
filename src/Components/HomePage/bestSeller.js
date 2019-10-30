import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import '../../Assets/bestSellers.css'
import data from '../../data/dataBestseller'
import { Link } from 'react-router-dom'

export default class BestSeller extends Component {

  componentWillMount() {
    this.setState({
      product: [],
    });
  }

  //   createproduct = n => range(n).map(i => <div key={i} style={{ height: 100, background: '#ebebe0' }}>{i}</div>);

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      product,
    } = this.state;

    return (
      <div>
        <h1 className="title">Best Sellers</h1>
        <ItemsCarousel
          // Placeholder configurations
          enablePlaceholder
          numberOfPlaceholderItems={2}
          placeholderItem={
            <div className="container">{data.map(item => {
              return (
                <Link to={`women/detail/${item.id}`}>
                  <div className="item" id="items" productid={item.id}>
                    <img src={item.image_url} alt="gambar" />
                    <div>
                      <p className="barang">{item.productName}</p>
                      <p className="harga">{item.productPrice}</p>
                    </div>
                  </div>
                </Link>
              )
            })}</div>}

          // Carousel configurations
          numberOfCards={1}
          gutter={3}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}

          // Active item configurations
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}

          chevronWidth={100}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={false}
        >
          {product}
        </ItemsCarousel>
      </div>
    );
  }
} 