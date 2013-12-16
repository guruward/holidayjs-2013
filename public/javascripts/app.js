/**
 * Created by stephen on 12/14/13.
 */
myApp = angular.module('nuke',[]) ;

function nukeCtrl($scope, $http,$sce) {
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
   $scope.songName = "white christmas" ;

   $scope.play = function(){
       $scope.pAlbum = this.album.href ;
   }

    $scope.getSong = function(){
        $http.get('http://ws.spotify.com/search/1/album.json?q=' + $scope.songName + '&page=2').success(function (data) {


           for(var i=0; i < data.albums.length ; i++){
               data.albums[i].href = 'http://embed.spotify.com/?uri=' + data.albums[i].href ;
           }

         $scope.albums = data.albums ;
        });

    }

}
