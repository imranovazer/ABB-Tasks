import React from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "./styles/App.scss";
import Card from "./components/Card";
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      firstModalOpen: false,
      secondModalOpen: false,
      productsData: [],
      productAddToCart: null,
      cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
      favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
    };
  }


  handleAddToCardClick(id) {

    this.setState({ productAddToCart: id, firstModalOpen: true })

  }
  async fetchData() {
    const res = await fetch('./data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const fetchedData = await res.json();
    this.setState({ productsData: fetchedData.products });
    return fetchedData;

  }
  componentDidMount() {
    this.fetchData()

  }
  toggleFirstModal = () => {
    this.setState((prevState) => ({
      firstModalOpen: !prevState.firstModalOpen,
    }));
  };

  toggleSecondModal = () => {
    this.setState((prevState) => ({
      secondModalOpen: !prevState.secondModalOpen,
    }));
  };

  handleAddToCartConfirm = () => {
    if (this.state.cart.includes(this.state.productAddToCart)) {
      this.setState(prevState => {
        console.log('prev', prevState.cart)
        const newFavorites = prevState.cart.filter((item) => item !== this.state.productAddToCart)
        localStorage.setItem('cart', JSON.stringify(newFavorites))

        return {
          cart: newFavorites,
          firstModalOpen: false
        }
      })
    }
    else {
      this.setState(prevState => {
        const newFavorites = [...prevState.cart, this.state.productAddToCart]
        localStorage.setItem('cart', JSON.stringify(newFavorites))
        return { cart: newFavorites, firstModalOpen: false }
      })
    }
  }
  handleAddToFavorites = (id) => {
    if (this.state.favorites.includes(id)) {
      this.setState(prevState => {
        const newFavorites = prevState.favorites.filter((item) => item !== id)
        localStorage.setItem('favorites', JSON.stringify(newFavorites))

        return { favorites: newFavorites }
      })
    }
    else {
      this.setState(prevState => {
        const newFavorites = [...prevState.favorites, id]
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        return { favorites: newFavorites }
      })
    }

  }



  render() {
    console.log(this.state.favorites)

    return (
      <div className="app container">
        <div className="button-container">
          <Button
            backgroundColor="#1B6B93"
            text="Open first modal"
            onClick={this.toggleFirstModal}
          />
          <Button
            backgroundColor="#FE0000"
            text="Open second modal"
            onClick={this.toggleSecondModal}
          />

        </div>

        <div className="products-container">
          {
            this.state.productsData.map(item => {
              return <Card name={item.name} image={item.imagePath} cart={this.state.cart} id={item.id} key={item.id} favorites={this.state.favorites} handleAddToFavorites={() => this.handleAddToFavorites(item.id)} handleAddToCardClick={() => this.handleAddToCardClick(item.id)} />
            })
          }
        </div>



        {this.state.firstModalOpen && (
          <Modal
            header="Add to cart"
            closeButton={true}
            text="Plese confir that you want add to card this item."
            actions={
              <Button
                backgroundColor="orange"
                text="Add"
                onClick={this.handleAddToCartConfirm}
              />
            }
            onClose={this.toggleFirstModal}
          />
        )}

        {this.state.secondModalOpen && (
          <Modal
            header="Second Modal"
            closeButton={true}
            text="This is the second modal window."
            actions={
              <Button
                backgroundColor="red"
                text="Close"
                onClick={this.toggleSecondModal}
              />
            }
            onClose={this.toggleSecondModal}
          />
        )}
      </div>
    );
  }
}

export default App;
