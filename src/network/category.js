export function getCategory() {
  return axios({
    url: "/category"
  }).catch(err => err);
}

export function getSubcategory(maitKey) {
  return axios({
    url: "/subcategory",
    params: {
      maitKey
    }
  }).catch(err => err);
}

export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  }).catch(err => err);
}
