import axios from "axios";

export default {
    createUser:function(formData){
        return axios.post("/api/newUser", formData)
    },
    deleteUser: function (id) {
        return axios.delete('api/user/'+id)
    },
    updateUser: function (data) {
        return axios.put('/api/user', data)
    },
    getAllUser:function(){
        return axios.get('/api/alluser')
    },
    getUserData: function () {
        return axios.get('/api/user')
    },
    createDog: function (formData) {
        return axios.post('/api/dog', formData)
    },
    deleteDog: function (id) {
        return axios.delete('/api/dog/'+id)
    },
    updateDog: function (dogdata) {
        return axios.put('api/dog', dogdata)
    },
    checkIfsession: function (){
        return axios.get("/api/session");
    },
    userLogin: function(user){
        return axios.post("/api/login", user); 
    },
    addChat: function(username1, usernam2, body) {
        return axios.post('/api/message', username1, usernam2, body);
    },
    addPack: function (username2) {
        return axios.put('/api/addpack/', username2);
    },
    getPack: function (username) {
        return axios.get('/api/mypack', username)
    },
    getPackInfo: function (username) {
        return axios.post('/api/mypack/info', username)
    },
    logout: function () {
        return axios.get('/api/logout');
    },
    sendCoins: function (twoWhoAndAmount){
        return axios.post("/api/sendcoin", twoWhoAndAmount )
    },
    newRating: function (rate){
        return axios.post('/api/rating', rate);
    },
    saveDates: function (startdate, enddate) {
        return axios.post('/api/savedates', startdate, enddate);
    }
 
}