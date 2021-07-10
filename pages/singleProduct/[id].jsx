import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URL } from "../../api";
import MainLayout from "../../components/MainLayout";
import RouteProtect from "../../HOC/RouteProtect";
import { Image } from "antd";

const singleProduct = () => {
  const [data, setData] = useState();
  const Router = useRouter();

  const { id } = Router.query;

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${URL}/products/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, [Router]);
  return (
    <RouteProtect>
      <MainLayout title="Home" subTitle="Product" hasBack>
        {!!data ? (
          <div className="single-content">
            <div className="image-wrapper">
              <img className="sp-img" src={data.image} />
              <p className="price">${data.price}</p>
            </div>
            <div className="name-warranty">
              <p className="sp-name">{data.name}</p>
              <p className="sp-war">
                Warranty: {data.warranty ?? ""}{" "}
                {data.warranty > 1 ? "Years" : "Year"}{" "}
              </p>
            </div>
            <p className="sp-description">{data.description}</p>
          </div>
        ) : null}
      </MainLayout>
    </RouteProtect>
  );
};

export default singleProduct;
