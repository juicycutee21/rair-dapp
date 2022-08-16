const admin = require('./admin');
const addMedia = require('./addMedia');
const authentication = require('./authentication');
const createContract = require('./createContract');
const createUser = require('./createUser');
const getChallenge = require('./getChallenge');
const filterAndSort = require('./filterAndSort');
const getToken = require('./getToken');
const singleUser = require('./singleUser');
const removeMedia = require('./removeMedia');
const stream = require('./stream');
const uploadVideo = require('./uploadVideo');
const uploadVideoFile = require('./uploadVideoFile');
const updateContract = require('./updateContract');
const updateUser = require('./updateUser');
const singleContract = require('./singleContract');
const getFilesByNFT = require('./getFilesByNFT');
const nftContract = require('./nftContract');
const nftProduct = require('./nftProduct');
const getTokensByContractProduct = require('./getTokensByContractProduct');
const search = require('./search');
const updateTokenMetadata = require('./updateTokenMetadata');
const pinningMultiple = require('./pinningMultiple');
const createCommonTokenMetadata = require('./createCommonTokenMetadata');
const createFavoriteToken = require('./createFavoriteToken');

module.exports = {
  admin,
  addMedia,
  authentication,
  createContract,
  createUser,
  getChallenge,
  filterAndSort,
  getToken,
  singleUser,
  removeMedia,
  stream,
  uploadVideo,
  uploadVideoFile,
  updateContract,
  updateUser,
  singleContract,
  getFilesByNFT,
  nftContract,
  nftProduct,
  getTokensByContractProduct,
  search,
  updateTokenMetadata,
  pinningMultiple,
  createCommonTokenMetadata,
  createFavoriteToken,
};
