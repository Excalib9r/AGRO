import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BsImages } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { get_category } from "../../store/Reducers/categoryReducer";
import { add_product, messageClear } from "../../store/Reducers/productReducer";
import { overrideStyle } from "../../utils/utils";
import { PropagateLoader } from "react-spinners";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { successMessage, errorMessage, loader } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(
      get_category({
        searchValue: "",
        perPage: "",
        page: "",
      })
    );
  }, []);

  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [catShow, setCatShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let chosenValue = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(chosenValue);
    } else {
      setAllCategory(categories);
    }
  };

  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);

  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;

    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];

      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImageShow([...imageShow, ...imageUrl]);
    }
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imageShow;
      let tempImages = images;

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImageShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };

  const removeImage = (i) => {
    const filterImage = images.filter((img, index) => index !== i);
    const filterImageUrl = imageShow.filter((img, index) => index !== i);
    setImages(filterImage);
    setImageShow(filterImageUrl);
  };

  useEffect(() => {
    setAllCategory(categories);
  }, [categories]);

  const add = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("description", state.description);
    formData.append("price", state.price);
    formData.append("stock", state.stock);
    formData.append("category", category);
    formData.append("discount", state.discount);
    formData.append("shopName", "Farid Onions");
    formData.append("brand", state.brand);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    dispatch(add_product(formData));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setState({
        name: "",
        description: "",
        discount: "",
        price: "",
        brand: "",
        stock: "",
      });
      setImageShow([]);
      setImages([]);
      setCategory("");
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#ededed] rounded-md border border-slate-100 mb-4">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-[#3c3840] text-xl font-semibold uppercase">
            Add Product
          </h1>
          <Link
            className="text-[#ededed] bg-[#4e5447] hover:shadow-green-950/50 hover:shadow-lg hover:text-white rounded-md px-7 py-2 my-2 "
            to="/seller/dashboard/products"
          >
            Products
          </Link>
        </div>
        <div>
          <form onSubmit={add}>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#3c3840]">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product name</label>
                <input
                  className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
                  onChange={inputHandle}
                  value={state.name}
                  type="text"
                  placeholder="product name"
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product brand</label>
                <input
                  className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
                  onChange={inputHandle}
                  value={state.brand}
                  type="text"
                  placeholder="product brand"
                  name="brand"
                  id="brand"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#3c3840]">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <input
                  readOnly
                  onClick={() => setCatShow(!catShow)}
                  className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
                  onChange={inputHandle}
                  value={category}
                  type="text"
                  placeholder="-- select category --"
                  id="category"
                />
                <div
                  className={`absolute top-[101%] bg-[#ededed] w-full transition-all ${
                    catShow ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      value={searchValue}
                      onChange={categorySearch}
                      className="w-full px-3 py-1 focus:border-slate-800 outline-none bg-transparent overflow-hidden border border-slate-500 rounded-md text-[#3c3840]"
                      type="text"
                      placeholder="search"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll">
                    {allCategory.map((c, i) => (
                      <span
                        className={`px-4 py-2 hover:bg-[#4e5447] hover:text-white hover:shadow-lg  w-full cursor-pointer ${
                          category === c.name && "bg-[#dbdfaa]"
                        }`}
                        onClick={() => {
                          setCatShow(false);
                          setCategory(c.name);
                          setSearchValue("");
                          setAllCategory(categories);
                        }}
                      >
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Stock</label>
                <input
                  className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
                  onChange={inputHandle}
                  value={state.stock}
                  type="number"
                  min="0"
                  placeholder="product stock"
                  name="stock"
                  id="stock"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#3c3840]">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
                  onChange={inputHandle}
                  value={state.price}
                  type="number"
                  placeholder="price"
                  name="price"
                  id="price"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  min="0"
                  className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
                  onChange={inputHandle}
                  value={state.discount}
                  type="number"
                  placeholder="%discount%"
                  name="discount"
                  id="discount"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-1 text-[#3c3840] mb-5">
              <label htmlFor="description">Description</label>
              <textarea
                rows={4}
                className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
                onChange={inputHandle}
                value={state.description}
                placeholder="description"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 xs:gap-4 gap-3 w-full text-[#3c3840] mb-4">
              {imageShow.map((img, i) => (
                <div className="h-[180px] relative">
                  <label htmlFor={i}>
                    <img
                      className="w-full h-full rounded-sm"
                      src={img.url}
                      alt=""
                    />
                  </label>
                  <input
                    onChange={(e) => changeImage(e.target.files[0], i)}
                    type="file"
                    id={i}
                    className="hidden"
                  />
                  <span
                    onClick={() => removeImage(i)}
                    className="p-2 z-10 cursor-pointer bg-[#4e5447] hover:shadow-lg hover:shadow-green-950/50 text-white absolute top-1 right-1 rounded-full"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              ))}
              <label
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-[#6d6c6c] border-dashed hover:border-green-950 w-full text-[#3c3840]"
                htmlFor="image"
              >
                <span>
                  <BsImages />
                </span>
                <span>select image</span>
              </label>
              <input
                multiple
                onChange={imageHandle}
                className="hidden"
                type="file"
                id="image"
              />
            </div>
            <div className="flex">
              <button
                disabled={loader ? true : false}
                className="bg-[#4e5447] w-[190px] hover:shadow-slate-950/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
              >
                {loader ? (
                  <PropagateLoader
                    color="#ededed"
                    cssOverride={overrideStyle}
                  />
                ) : (
                  "Add Product"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
