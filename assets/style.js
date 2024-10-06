import { StyleSheet } from "react-native";
const primaryColor = "#000000";
const secondaryColor = "#7e7e7e";
const red = "#b93c3c";
const grey = "#444444";
const blue = "#353d6e";
const iconBackground = "#fafafa";
const stars = "#feb801";
const border = "#d9d9d9";
const textDisabled = "#808080";

// Common styles
const commonFlexStyles = {
  flexDirection: "row",
  alignItems: "center",
};

const styles = StyleSheet.create({
  // Global Styles
  body: {
    fontFamily: "Poppins", // Custom fonts need to be linked in your project
    scrollBehavior: "smooth",
    backgroundColor: "#fff",
  },
  text: {
    fontWeight: "400",
  },
  heading: {
    fontWeight: "500",
    textTransform: "capitalize",
  },
  button: {
    textTransform: "uppercase",
    fontSize: 16,
    backgroundColor: primaryColor,
    color: "#fff",
    borderWidth: 0,
    cursor: "pointer",
  },
  anchor: {
    textDecorationLine: "none",
    color: primaryColor,
  },
  list: {
    ...commonFlexStyles,
    listStyle: "none",
  },

  // Container Styles
  bodyContainer: {
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
  },
  containerFluid: {
    width: "85%",
    margin: "0 auto",
  },

  // Row Styles
  row: {
    ...commonFlexStyles,
    flexWrap: "wrap",
  },

  // Common Positioning
  pointer: {
    cursor: "pointer",
  },
  disabled: {
    color: textDisabled,
  },
  positionRelative: {
    position: "relative",
  },
  positionAbsolute: {
    position: "absolute",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  w100: {
    width: "100%",
  },
  dBlock: {
    display: "block",
  },
  dNone: {
    display: "none",
  },

  // Header Styles
  header: {
    height: 100,
    ...commonFlexStyles,
  },
  navItems: {
    gap: 30,
  },

  // Circle Icon Styles
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: iconBackground,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bigCircleIcon: {
    width: 50,
    height: 50,
    ...commonFlexStyles,
    justifyContent: "center",
    backgroundColor: iconBackground,
    borderRadius: 50,
  },
  brand: {
    width: 90,
  },

  // Breadcrumb Styles
  breadcrumbContainer: {
    backgroundColor: "#000", // Change as per your design
    paddingVertical: 20,
  },
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  breadcrumb: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  crumb: {
    color: "#fff", // Change color as needed
    fontSize: 16,
  },
  separator: {
    color: "#fff", // Change color for separator if needed
  },

  // Cart Styles
  cartCard: {
    backgroundColor: "#fff",
    padding: 20,
    right: 15,
    top: 45,
    position: "absolute",
    zIndex: 25,
    width: 200,
    borderRadius: 15,
  },
  cartHeader: {
    ...commonFlexStyles,
    justifyContent: "space-between",
    width: 150,
  },
  cartTitle: {
    fontSize: 22,
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: primaryColor,
    opacity: 0.4,
    zIndex: 10,
    transition: "all 0.3s ease-in-out",
  },
  cartProduct: {
    ...commonFlexStyles,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBlockColor: border,
    marginBottom: 20,
  },
  subTotal: {
    ...commonFlexStyles,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  // Product Overview Styles
  productOverview: {
    paddingVertical: 90,
    alignItems: "flex-start",
    gap: 100,
  },
  productImg: {
    marginTop: 55,
    borderWidth: 1,
    borderColor: border,
    borderRadius: 16,
    padding: 10,
    position: "relative",
  },
  saleBadge: {
    position: "absolute",
    top: 40,
    left: 0,
    width: 70,
    paddingVertical: 7,
    backgroundColor: red,
    fontSize: 18,
    textAlign: "center",
    zIndex: 5,
  },
  saleBadgeText: {
    marginLeft: 10,
    color: "#fff",
  },
  price: {
    color: red,
    fontSize: 20,
    paddingRight: 5,
    marginBottom: 10,
  },
  productInfo: {
    paddingVertical: 15,
  },
  productName: {
    fontSize: 20,
  },
  textLine: {
    textDecorationLine: "line-through",
    color: secondaryColor,
  },
  desc: {
    marginBottom: 10,
  },
  addAction: {
    gap: 14,
    flexDirection: "row",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 11,
  },
  cartButton: {
    backgroundColor: primaryColor,
    paddingVertical: 12,
    textAlign: "center",
    borderRadius: 5,
  },
  cartButtonText: {
    marginHorizontal: "auto",
    color: "#fff",
    fontSize: 18,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 22,
  },
  counter: {
    flexDirection: "row",
    width: 140,
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#ccc",
    color: "#888",
    borderRadius: 11,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  counterText: {
    fontSize: 22,
  },

  starRating: {
    flexDirection: "row",
  },
  star: {
    fontSize: 30,
  },
  filled: {
    color: stars,
  },
  empty: {
    color: grey,
  },
  // Cart Styles
  cart: {
    width: 400,
    position: "relative",
    paddingVertical: 30,
    borderRadius: 20,
    flexDirection: "column",
    backgroundColor: "#fff",
    cursor: "default",
    zIndex: 25,
    transition: "all 0.3s ease-in-out",
  },
  cartBadge: {
    backgroundColor: red,
    color: "#fff",
    fontSize: 10,
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -5,
    right: -5,
  },
  cartBadgeText: {
    color: "#fff",
  },
  additionalActions: {
    ...commonFlexStyles,
    gap: 30,
    flexDirection: "row",
  },
  // Slider Styles
  carousel: {
    width: "100%",
  },
  card: {
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 30,
    width: 257,
    height: 465,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    marginVertical: 20,
  },
  cardImage: {
    height: 231,
  },
  cardContent: {
    padding: 16,
  },
  itemId: {
    fontSize: 18,
    color: grey,
    fontWeight: "500",
    marginBottom: 8,
  },
  description: {
    color: secondaryColor,
    fontSize: 14,
    height: 40,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  priceCard: {
    color: red,
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 5,
  },
  addToCart: {
    padding: 11,
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 6,
    width: "75%",
  },

  // Scrollbar Styles (not directly applicable)
  scrollbar: {
    width: 8,
    height: 8,
  },

  // Loading Styles
  loadingContainer: {
    ...commonFlexStyles,
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  progressBar: {
    width: 600,
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: blue,
    transition: "width 0.1s ease",
  },
  mainContent: {
    padding: 20,
    textAlign: "center",
  },
});

export default styles;
