import { Component, createContext } from "react";
import PropTypes from "prop-types";
import data from "../utils/services/data";

const AppContext = createContext();

class AppContextProvider extends Component {
  state = {
    products: [],
    currentProduct: data[0],
    productsCount: 0,
    isCartOpen: false,
  };

  constructor(props) {
    super(props);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
    this.handleOpenCart = this.handleOpenCart.bind(this);
    this.handleCloseCart = this.handleCloseCart.bind(this);
    this.handleCurrentProduct = this.handleCurrentProduct.bind(this);
  }

  addProductToCart(product) {
    const isProductExist = this.state.products.find(
      (prod) => prod.id === product.id
    );

    if (isProductExist) {
      if (product.count) {
        const updatedProductsList = this.state.products.map((prod) => {
          if (prod.id === product.id) prod.count = product.count;
          return prod;
        });
        this.setState({
          products: updatedProductsList,
          productsCount: updatedProductsList.reduce(
            (acc, current) => acc + current.count,
            0
          ),
        });
      }
    } else {
      const newProductsList = [
        ...this.state.products,
        { ...product, count: product.count || 1 },
      ];
      this.setState({
        products: newProductsList,
        productsCount: newProductsList.reduce(
          (acc, current) => acc + current.count,
          0
        ),
      });
    }
  }

  removeProductFromCart(productId) {
    const updatedProductsList = this.state.products.filter(
      (product) => product.id !== productId
    );
    this.setState({
      products: updatedProductsList,
      productsCount: updatedProductsList.reduce(
        (acc, current) => acc + current.count,
        0
      ),
    });
  }

  handleCurrentProduct(product) {
    this.setState({
      currentProduct: product,
    });
  }

  handleCloseCart() {
    this.setState({ isCartOpen: false });
  }

  handleOpenCart() {
    this.setState({ isCartOpen: true });
  }

  render() {
    const { products, productsCount, isCartOpen, currentProduct } = this.state;
    return (
      <AppContext.Provider
        value={{
          products,
          productsCount,
          isCartOpen,
          currentProduct,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart,
          handleOpenCart: this.handleOpenCart,
          handleCloseCart: this.handleCloseCart,
          handleCurrentProduct: this.handleCurrentProduct,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

AppContextProvider.propTypes = {
  children: PropTypes.node,
};

export { AppContext, AppContextProvider };
