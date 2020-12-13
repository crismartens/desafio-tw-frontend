angular.module('app')
    .factory('ApiService', function($http, API){
        return {
            tipos: function(){
                return $http.get(API + 'tipos/');
            },
            list: function(){
                return $http.get(API + 'atividades/');
            },
            create: function(item){
                return $http.post(API + 'atividades/', item);
            },
            update: function(item, id){
                return $http.put(API + 'atividades/' + id, item);
            },
            delete: function(id){
                return $http.delete(API + 'atividades/' + id);
            }
        }
    });

app.value('API', 'http://localhost:8080/');