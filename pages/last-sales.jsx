import { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  const { data, error } = useSWR(
    "https://react-todo-56d15-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );
  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);
  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(
  //       "https://react-todo-56d15-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const transformedSales = [];
  //         console.log(data);
  //         for (const key in data) {
  //           transformedSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }
  //         console.log(transformedSales);
  //         setSales(transformedSales);
  //         console.log(sales);
  //         setIsLoading(false);
  //       });
  //   }, []);
  if (error) {
    return <p>Failed to load data.</p>;
  }
  if (!data || !sales) {
    return <p>...Loading</p>;
  }
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(
    "https://react-todo-56d15-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
  );

  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return { props: { sales: transformedSales }, revalidate: 60 * 60 * 24 };
}
