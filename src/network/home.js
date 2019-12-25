export function getHomeMultiData() {
  return axios({
    url: "/home/multidata"
  });
}

export function getHomeGoodsData(type, page) {
  return axios({
    url: "/home/data",
    params: { type, page }
  });
}
