// provide a wrapper function around fetching by id given an API
export const fetchById = (api, id) => {
  if (api) {
    return api.getByID(id);
  }
};

// wrapper function around populating data from an api request
export const populateData = (dataToMap, api) => (dataKey, callback) => {
  dataToMap.map(({ [dataKey]: val }, index) => {
    fetchById(api, val.id).then(({ data }) => {
      const obj = { id: val.id, data };
      if (val.uid) obj.uid = val.uid;
      callback(obj, index);
    });
  });
};
