import "./ProductLoader.css";

function ProductLoader() {
  return (
    <div className="loader-container">
      <h1 className="loader-title">Wait...</h1>
      <div className="circle-loading-container">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ProductLoader;
