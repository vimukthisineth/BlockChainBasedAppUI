app.factory('BlockChainFactory', ['$http', function ($http) {
    var blockChainFactory = {};

    blockChainFactory.getBlockChain = function () {
        return $http(getReq('GET', 'api/blockChain','',''));
    }

    return blockChainFactory;
}]);
