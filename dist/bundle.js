(()=>{"use strict";var t=function(){function t(t,n,e){this.teacher=t,this.courses=n,this.students=e}return t.prototype.render=function(){this.teacher.init(),this.courses.init(),this.students.init()},t}(),n=function(){function t(t,n,e,i){this.parentElement=t,this.dataList=n,this.title=e,this.subTitles=i}return t.prototype.clickHandler=function(t){console.log(document.querySelectorAll("tr")),document.querySelectorAll("tr").forEach((function(n){return n.addEventListener("click",(function(){t(n.dataset.id)}))}))},t.prototype.render=function(){var t='\n    <div class="table-wrapper wrapper-'+this.title+'">\n    <table>\n        <caption>'+this.title+"</caption>\n        <thead>\n          "+this.subTitles.map((function(t){return"<th>"+t+"</th>"})).join("")+"\n        </thead>\n        <tbody>\n          "+this.dataList.map((function(t){var n=t.displayInfo();return'\n                <tr data-id="'+t.id+'">\n                '+Object.keys(n).map((function(t){return"<td>"+n[t]+"</td>"})).join("")+"\n                </tr>\n          "})).join("")+"\n        </tbody>\n      </table>\n    </div>\n    ";this.parentElement.innerHTML=t},t.prototype.init=function(){this.render()},t}();let e=(t=21)=>{let n="",e=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let i=63&e[t];n+=i<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i<63?"_":"-"}return n};var i,o=function(){function t(t,n,e,i){this.id=t,this.title=n,this.description=e,this.duration=i}return t.prototype.displayInfo=function(){return{title:this.title,duration:this.duration}},t}(),r=function(){function t(t){this.parentElement=t,this.coursesView=new n(this.parentElement,[new o(e(),"math","math is wonderful","6h"),new o(e(),"history","history is good for you","3h"),new o(e(),"swedish","without swedish you will face some serious problems","2h"),new o(e(),"english","the global language, learn it NOW!!!","5h")],"Courses",["title","duration"])}return t.prototype.init=function(){this.coursesView.init()},t}(),s=function(t,n,e,i,o){this.id=t,this.firstName=n,this.lastName=e,this.email=i,this.age=o},a=(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),c=function(t){function n(n,e,i,o,r){var s=t.call(this,n,e,i,o,r)||this;return s.subjects=[],s}return a(n,t),n.prototype.displayInfo=function(){return{name:this.firstName+"-"+this.lastName,email:this.email,age:""+this.age}},n}(s),u=function(){function t(t){this.parentElement=t,this.teachersView=new n(this.parentElement,[new c(e(),"Frank","Smith","frank@io.com",43),new c(e(),"Logan","Jonsson","logan@io.com",47),new c(e(),"Mia","Greger","mia@io.com",41),new c(e(),"Boris","Rooney","frank@io.com",53)],"Teachers",["name","email","age"])}return t.prototype.init=function(){this.teachersView.init()},t}(),l=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};return function(n,e){function i(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),h=function(t){function n(n,e,i,o,r){return t.call(this,n,e,i,o,r)||this}return l(n,t),n.prototype.displayInfo=function(){return{name:this.firstName+"-"+this.lastName,email:this.email,age:""+this.age}},n}(s),d=function(){return[new h(e(),"Frank","Mellberg","frank@isObject.com",21),new h(e(),"Rio","Ferdinand","rio@isObject.com",25),new h(e(),"Nemanja","Vidic","nemanja@isObject.com",32),new h(e(),"Fredrik","ljungberg","fredrik@isObject.com",32),new h(e(),"Lotta","Schelin","lotta@isObject.com",21),new h(e(),"Stina","Olofsson","sina@isObject.com",21)]},p=function(){function t(t,n){this.parentElement=t,this.data=n}return t.prototype.render=function(){var t,n=this,e='\n      <p id="apa">'+this.data+"</p>\n    ";null===(t=document.getElementById("apa"))||void 0===t||t.addEventListener("click",(function(){console.log(n,"student has been clicked")})),this.parentElement.insertAdjacentHTML("beforeend",e)},t}(),f=function(){function t(t){this.parentElement=t,this.studentsView=new n(this.parentElement,d(),"Students",["name","email","age"])}return t.prototype.handleAddStudent=function(){var t=this;this.studentsView.clickHandler((function(n){var e=d().find((function(t){return t.id===n})),i=(null==e?void 0:e.firstName)+" - "+(null==e?void 0:e.lastName);new p(t.parentElement,i).render()}))},t.prototype.init=function(){this.studentsView.init(),this.handleAddStudent()},t}();new t(new u(document.getElementById("teacher")),new r(document.getElementById("course")),new f(document.getElementById("student"))).render()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9wYXR0ZXJucy9tdmMyLjAvY29udHJvbGxlcnMvYXBwLnRzIiwid2VicGFjazovL3NjaG9vbC1kYXRhLy4vc3JjL3BhdHRlcm5zL212YzIuMC92aWV3cy9saXN0LXZpZXcudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LnByb2QuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvcGF0dGVybnMvbXZjMi4wL21vZGVscy9jb3Vyc2UudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvcGF0dGVybnMvbXZjMi4wL2NvbnRyb2xsZXJzL2NvdXJzZS50cyIsIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9wYXR0ZXJucy9tdmMyLjAvbW9kZWxzL1BlcnNvbi50cyIsIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9wYXR0ZXJucy9tdmMyLjAvbW9kZWxzL3RlYWNoZXIudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvcGF0dGVybnMvbXZjMi4wL2NvbnRyb2xsZXJzL3RlYWNoZXIudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvcGF0dGVybnMvbXZjMi4wL21vZGVscy9zdHVkZW50LnRzIiwid2VicGFjazovL3NjaG9vbC1kYXRhLy4vc3JjL3BhdHRlcm5zL212YzIuMC92aWV3cy9pdGVtLXZpZXcudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvcGF0dGVybnMvbXZjMi4wL2NvbnRyb2xsZXJzL3N0dWRlbnQudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsidGVhY2hlciIsImNvdXJzZXMiLCJzdHVkZW50cyIsInRoaXMiLCJyZW5kZXIiLCJpbml0IiwicGFyZW50RWxlbWVudCIsImRhdGFMaXN0IiwidGl0bGUiLCJzdWJUaXRsZXMiLCJjbGlja0hhbmRsZXIiLCJzdWJzY3JpYmVyIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0ciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhc2V0IiwiaWQiLCJodG1sIiwibWFwIiwidCIsImpvaW4iLCJkYXRhIiwiZGlzcGxheUluZm8iLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiaW5uZXJIVE1MIiwibmFub2lkIiwic2l6ZSIsImJ5dGVzIiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsImJ5dGUiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiZGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsImNvdXJzZXNWaWV3IiwiTGlzdFZpZXciLCJDb3Vyc2UiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiYWdlIiwic3ViamVjdHMiLCJuYW1lIiwiUGVyc29uIiwidGVhY2hlcnNWaWV3IiwiVGVhY2hlciIsImxvYWRTdHVkZW50cyIsIlN0dWRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImluc2VydEFkamFjZW50SFRNTCIsInN0dWRlbnRzVmlldyIsImhhbmRsZUFkZFN0dWRlbnQiLCJzdHVkZW50IiwiZmluZCIsIkl0ZW0iLCJBcHAiLCJUZWFjaGVyQ29udHJvbGxlciIsIkNvdXJzZUNvbnRyb2xsZXIiLCJTdHVkZW50Q29udHJvbGxlciJdLCJtYXBwaW5ncyI6Im1CQUlBLGlCQUlFLFdBQVlBLEVBQTRCQyxFQUEyQkMsR0FDakVDLEtBQUtILFFBQVVBLEVBQ2ZHLEtBQUtGLFFBQVVBLEVBQ2ZFLEtBQUtELFNBQVdBLEVBUXBCLE9BTEUsWUFBQUUsT0FBQSxXQUNFRCxLQUFLSCxRQUFRSyxPQUNiRixLQUFLRixRQUFRSSxPQUNiRixLQUFLRCxTQUFTRyxRQUVsQixFQWZBLEdDREEsYUFLRSxXQUNFQyxFQUNBQyxFQUNBQyxFQUNBQyxHQUVBTixLQUFLRyxjQUFnQkEsRUFDckJILEtBQUtJLFNBQVdBLEVBQ2hCSixLQUFLSyxNQUFRQSxF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QWlCLFNBQVMsV0FDeEROLFFBQVFDLElBQUksRUFBTSwrQkFFcEJWLEtBQUtHLGNBQWNtRCxtQkFBbUIsWUFBYXBDLElBRXZELEVBakJBLEdDSUEsYUFHRSxXQUFZZixHQUNWSCxLQUFLRyxjQUFnQkEsRUFDckJILEtBQUt1RCxhQUFlLElBQUlmLEVBQVN4QyxLQUFLRyxjQUFlZ0QsSUFBZ0IsV0FBWSxDQUMvRSxPQUNBLFFBQ0EsUUFpQk4sT0FiRSxZQUFBSyxpQkFBQSxzQkFDRXhELEtBQUt1RCxhQUFhaEQsY0FBYSxTQUFDVSxHQUM5QixJQUFNd0MsRUFBVU4sSUFBZU8sTUFBSyxTQUFBRCxHQUFXLE9BQUFBLEVBQVF4QyxLQUFPQSxLQUN4REssR0FBVW1DLGFBQU8sRUFBUEEsRUFBU2YsV0FBUyxPQUFNZSxhQUFPLEVBQVBBLEVBQVNkLFVBQzFCLElBQUlnQixFQUFLLEVBQUt4RCxjQUFlbUIsR0FDckNyQixhQUluQixZQUFBQyxLQUFBLFdBQ0VGLEtBQUt1RCxhQUFhckQsT0FDbEJGLEtBQUt3RCxvQkFFVCxFQXpCQSxHQ01FLElBQUlJLEVBQ0YsSUFBSUMsRUFBa0JsRCxTQUFTMEMsZUFBZSxZQUM5QyxJQUFJUyxFQUFpQm5ELFNBQVMwQyxlQUFlLFdBQzdDLElBQUlVLEVBQWtCcEQsU0FBUzBDLGVBQWUsYUFDOUNwRCxVIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlYWNoZXJDb250cm9sbGVyIH0gZnJvbSBcIi4vdGVhY2hlclwiXG5pbXBvcnQgeyBDb3Vyc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vY291cnNlXCJcbmltcG9ydCB7IFN0dWRlbnRDb250cm9sbGVyIH0gZnJvbSBcIi4vc3R1ZGVudFwiXG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICB0ZWFjaGVyOiBUZWFjaGVyQ29udHJvbGxlclxuICBjb3Vyc2VzOiBDb3Vyc2VDb250cm9sbGVyXG4gIHN0dWRlbnRzOiBTdHVkZW50Q29udHJvbGxlclxuICBjb25zdHJ1Y3Rvcih0ZWFjaGVyOiBUZWFjaGVyQ29udHJvbGxlciwgY291cnNlczogQ291cnNlQ29udHJvbGxlciwgc3R1ZGVudHM6IFN0dWRlbnRDb250cm9sbGVyKSB7XG4gICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlclxuICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZXNcbiAgICB0aGlzLnN0dWRlbnRzID0gc3R1ZGVudHNcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnRlYWNoZXIuaW5pdCgpXG4gICAgdGhpcy5jb3Vyc2VzLmluaXQoKVxuICAgIHRoaXMuc3R1ZGVudHMuaW5pdCgpXG4gIH1cbn1cbiIsImltcG9ydCB7IENvdXJzZSB9IGZyb20gXCIuLi8uLi9tdmMvbW9kZWxzL2NvdXJzZS1tb2RlbFwiXG5pbXBvcnQgeyBUZWFjaGVyIH0gZnJvbSBcIi4uL21vZGVscy90ZWFjaGVyXCJcblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3IHtcbiAgcGFyZW50RWxlbWVudDogSFRNTERpdkVsZW1lbnRcbiAgZGF0YUxpc3Q6IEFycmF5PGFueT5cbiAgdGl0bGU6IHN0cmluZ1xuICBzdWJUaXRsZXM6IHN0cmluZ1tdXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhcmVudEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50LFxuICAgIGRhdGFMaXN0OiBBcnJheTxhbnk+LFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgc3ViVGl0bGVzOiBzdHJpbmdbXVxuICApIHtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50XG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5zdWJUaXRsZXMgPSBzdWJUaXRsZXNcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihzdWJzY3JpYmVyOiBGdW5jdGlvbikge1xuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKSlcbiAgICBjb25zdCB0cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIilcbiAgICB0cnMuZm9yRWFjaCh0ciA9PlxuICAgICAgdHIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc3Vic2NyaWJlcih0ci5kYXRhc2V0LmlkKVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyIHdyYXBwZXItJHt0aGlzLnRpdGxlfVwiPlxuICAgIDx0YWJsZT5cbiAgICAgICAgPGNhcHRpb24+JHt0aGlzLnRpdGxlfTwvY2FwdGlvbj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICR7dGhpcy5zdWJUaXRsZXMubWFwKHQgPT4gYDx0aD4ke3R9PC90aD5gKS5qb2luKFwiXCIpfVxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgJHsodGhpcy5kYXRhTGlzdCBhcyBBcnJheTxhbnk+KVxuICAgICAgICAgICAgLm1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlJbmZvID0gZGF0YS5kaXNwbGF5SW5mbygpIGFzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8dHIgZGF0YS1pZD1cIiR7ZGF0YS5pZH1cIj5cbiAgICAgICAgICAgICAgICAke09iamVjdC5rZXlzKGRpc3BsYXlJbmZvKVxuICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gYDx0ZD4ke2Rpc3BsYXlJbmZvW2tleV19PC90ZD5gKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICBgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICAvLyB0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgaHRtbClcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFxuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cbn1cbiIsIi8vIFRoaXMgZmlsZSByZXBsYWNlcyBgaW5kZXguanNgIGluIGJ1bmRsZXJzIGxpa2Ugd2VicGFjayBvciBSb2xsdXAsXG4vLyBhY2NvcmRpbmcgdG8gYGJyb3dzZXJgIGNvbmZpZyBpbiBgcGFja2FnZS5qc29uYC5cblxuaW1wb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcblxuaWYgKGZhbHNlKSB7XG4gIC8vIEFsbCBidW5kbGVycyB3aWxsIHJlbW92ZSB0aGlzIGJsb2NrIGluIHRoZSBwcm9kdWN0aW9uIGJ1bmRsZS5cbiAgaWYgKFxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgJiZcbiAgICB0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJ1xuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnUmVhY3QgTmF0aXZlIGRvZXMgbm90IGhhdmUgYSBidWlsdC1pbiBzZWN1cmUgcmFuZG9tIGdlbmVyYXRvci4gJyArXG4gICAgICAgICdJZiB5b3UgZG9u4oCZdCBuZWVkIHVucHJlZGljdGFibGUgSURzIHVzZSBgbmFub2lkL25vbi1zZWN1cmVgLiAnICtcbiAgICAgICAgJ0ZvciBzZWN1cmUgSURzLCBpbXBvcnQgYHJlYWN0LW5hdGl2ZS1nZXQtcmFuZG9tLXZhbHVlc2AgJyArXG4gICAgICAgICdiZWZvcmUgTmFubyBJRC4gSWYgeW91IHVzZSBFeHBvLCBpbnN0YWxsIGBleHBvLXJhbmRvbWAgJyArXG4gICAgICAgICdhbmQgdXNlIGBuYW5vaWQvYXN5bmNgLidcbiAgICApXG4gIH1cbiAgaWYgKHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnSW1wb3J0IGZpbGUgd2l0aCBgaWYgKCF3aW5kb3cuY3J5cHRvKSB3aW5kb3cuY3J5cHRvID0gd2luZG93Lm1zQ3J5cHRvYCcgK1xuICAgICAgICAnIGJlZm9yZSBpbXBvcnRpbmcgTmFubyBJRCB0byBmaXggSUUgMTEgc3VwcG9ydCdcbiAgICApXG4gIH1cbiAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1lvdXIgYnJvd3NlciBkb2VzIG5vdCBoYXZlIHNlY3VyZSByYW5kb20gZ2VuZXJhdG9yLiAnICtcbiAgICAgICAgJ0lmIHlvdSBkb27igJl0IG5lZWQgdW5wcmVkaWN0YWJsZSBJRHMsIHlvdSBjYW4gdXNlIG5hbm9pZC9ub24tc2VjdXJlLidcbiAgICApXG4gIH1cbn1cblxubGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuXG5sZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBzaXplLCBnZXRSYW5kb20pID0+IHtcbiAgLy8gRmlyc3QsIGEgYml0bWFzayBpcyBuZWNlc3NhcnkgdG8gZ2VuZXJhdGUgdGhlIElELiBUaGUgYml0bWFzayBtYWtlcyBieXRlc1xuICAvLyB2YWx1ZXMgY2xvc2VyIHRvIHRoZSBhbHBoYWJldCBzaXplLiBUaGUgYml0bWFzayBjYWxjdWxhdGVzIHRoZSBjbG9zZXN0XG4gIC8vIGAyXjMxIC0gMWAgbnVtYmVyLCB3aGljaCBleGNlZWRzIHRoZSBhbHBoYWJldCBzaXplLlxuICAvLyBGb3IgZXhhbXBsZSwgdGhlIGJpdG1hc2sgZm9yIHRoZSBhbHBoYWJldCBzaXplIDMwIGlzIDMxICgwMDAxMTExMSkuXG4gIC8vIGBNYXRoLmNsejMyYCBpcyBub3QgdXNlZCwgYmVjYXVzZSBpdCBpcyBub3QgYXZhaWxhYmxlIGluIGJyb3dzZXJzLlxuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIC8vIFRob3VnaCwgdGhlIGJpdG1hc2sgc29sdXRpb24gaXMgbm90IHBlcmZlY3Qgc2luY2UgdGhlIGJ5dGVzIGV4Y2VlZGluZ1xuICAvLyB0aGUgYWxwaGFiZXQgc2l6ZSBhcmUgcmVmdXNlZC4gVGhlcmVmb3JlLCB0byByZWxpYWJseSBnZW5lcmF0ZSB0aGUgSUQsXG4gIC8vIHRoZSByYW5kb20gYnl0ZXMgcmVkdW5kYW5jeSBoYXMgdG8gYmUgc2F0aXNmaWVkLlxuXG4gIC8vIE5vdGU6IGV2ZXJ5IGhhcmR3YXJlIHJhbmRvbSBnZW5lcmF0b3IgY2FsbCBpcyBwZXJmb3JtYW5jZSBleHBlbnNpdmUsXG4gIC8vIGJlY2F1c2UgdGhlIHN5c3RlbSBjYWxsIGZvciBlbnRyb3B5IGNvbGxlY3Rpb24gdGFrZXMgYSBsb3Qgb2YgdGltZS5cbiAgLy8gU28sIHRvIGF2b2lkIGFkZGl0aW9uYWwgc3lzdGVtIGNhbGxzLCBleHRyYSBieXRlcyBhcmUgcmVxdWVzdGVkIGluIGFkdmFuY2UuXG5cbiAgLy8gTmV4dCwgYSBzdGVwIGRldGVybWluZXMgaG93IG1hbnkgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuICAvLyBUaGUgbnVtYmVyIG9mIHJhbmRvbSBieXRlcyBnZXRzIGRlY2lkZWQgdXBvbiB0aGUgSUQgc2l6ZSwgbWFzayxcbiAgLy8gYWxwaGFiZXQgc2l6ZSwgYW5kIG1hZ2ljIG51bWJlciAxLjYgKHVzaW5nIDEuNiBwZWFrcyBhdCBwZXJmb3JtYW5jZVxuICAvLyBhY2NvcmRpbmcgdG8gYmVuY2htYXJrcykuXG5cbiAgLy8gYC1+ZiA9PiBNYXRoLmNlaWwoZilgIGlmIGYgaXMgYSBmbG9hdFxuICAvLyBgLX5pID0+IGkgKyAxYCBpZiBpIGlzIGFuIGludGVnZXJcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIHNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKHZhciBpID0gMDsgaSA8IHN0ZXA7IGkrKylgLlxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIC8vIEFkZGluZyBgfHwgJydgIHJlZnVzZXMgYSByYW5kb20gYnl0ZSB0aGF0IGV4Y2VlZHMgdGhlIGFscGhhYmV0IHNpemUuXG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgLy8gYGlkLmxlbmd0aCArIDEgPT09IHNpemVgIGlzIGEgbW9yZSBjb21wYWN0IG9wdGlvbi5cbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gK3NpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUpID0+IGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuXG5sZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT4ge1xuICBsZXQgaWQgPSAnJ1xuICBsZXQgYnl0ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKVxuXG4gIC8vIEEgY29tcGFjdCBhbHRlcm5hdGl2ZSBmb3IgYGZvciAodmFyIGkgPSAwOyBpIDwgc3RlcDsgaSsrKWAuXG4gIHdoaWxlIChzaXplLS0pIHtcbiAgICAvLyBJdCBpcyBpbmNvcnJlY3QgdG8gdXNlIGJ5dGVzIGV4Y2VlZGluZyB0aGUgYWxwaGFiZXQgc2l6ZS5cbiAgICAvLyBUaGUgZm9sbG93aW5nIG1hc2sgcmVkdWNlcyB0aGUgcmFuZG9tIGJ5dGUgaW4gdGhlIDAtMjU1IHZhbHVlXG4gICAgLy8gcmFuZ2UgdG8gdGhlIDAtNjMgdmFsdWUgcmFuZ2UuIFRoZXJlZm9yZSwgYWRkaW5nIGhhY2tzLCBzdWNoXG4gICAgLy8gYXMgZW1wdHkgc3RyaW5nIGZhbGxiYWNrIG9yIG1hZ2ljIG51bWJlcnMsIGlzIHVubmVjY2Vzc2FyeSBiZWNhdXNlXG4gICAgLy8gdGhlIGJpdG1hc2sgdHJpbXMgYnl0ZXMgZG93biB0byB0aGUgYWxwaGFiZXQgc2l6ZS5cbiAgICBsZXQgYnl0ZSA9IGJ5dGVzW3NpemVdICYgNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICAvLyBgMC05YS16YFxuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgLy8gYEEtWmBcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjMpIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlkXG59XG5cbmV4cG9ydCB7IG5hbm9pZCwgY3VzdG9tQWxwaGFiZXQsIGN1c3RvbVJhbmRvbSwgdXJsQWxwaGFiZXQsIHJhbmRvbSB9XG4iLCJpbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCJcbmltcG9ydCB7IERpc3BsYXlJbmZvIH0gZnJvbSBcIi4uL3R5cGVzXCJcblxuZXhwb3J0IGNsYXNzIENvdXJzZSB7XG4gIGlkOiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGR1cmF0aW9uOiBzdHJpbmdcbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgZHVyYXRpb246IHN0cmluZykge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvblxuICB9XG4gIGRpc3BsYXlJbmZvKCk6IERpc3BsYXlJbmZvIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRDb3Vyc2VzID0gKCkgPT4gW1xuICBuZXcgQ291cnNlKG5hbm9pZCgpLCBcIm1hdGhcIiwgXCJtYXRoIGlzIHdvbmRlcmZ1bFwiLCBcIjZoXCIpLFxuICBuZXcgQ291cnNlKG5hbm9pZCgpLCBcImhpc3RvcnlcIiwgXCJoaXN0b3J5IGlzIGdvb2QgZm9yIHlvdVwiLCBcIjNoXCIpLFxuICBuZXcgQ291cnNlKG5hbm9pZCgpLCBcInN3ZWRpc2hcIiwgXCJ3aXRob3V0IHN3ZWRpc2ggeW91IHdpbGwgZmFjZSBzb21lIHNlcmlvdXMgcHJvYmxlbXNcIiwgXCIyaFwiKSxcbiAgbmV3IENvdXJzZShuYW5vaWQoKSwgXCJlbmdsaXNoXCIsIFwidGhlIGdsb2JhbCBsYW5ndWFnZSwgbGVhcm4gaXQgTk9XISEhXCIsIFwiNWhcIiksXG5dXG4iLCJpbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gXCIuLi92aWV3cy9saXN0LXZpZXdcIlxuaW1wb3J0IHsgbG9hZENvdXJzZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2NvdXJzZVwiXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VDb250cm9sbGVyIHtcbiAgcGFyZW50RWxlbWVudDogSFRNTERpdkVsZW1lbnRcbiAgY291cnNlc1ZpZXc6IExpc3RWaWV3XG4gIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudFxuICAgIHRoaXMuY291cnNlc1ZpZXcgPSBuZXcgTGlzdFZpZXcodGhpcy5wYXJlbnRFbGVtZW50LCBsb2FkQ291cnNlcygpLCBcIkNvdXJzZXNcIiwgW1xuICAgICAgXCJ0aXRsZVwiLFxuICAgICAgXCJkdXJhdGlvblwiLFxuICAgIF0pXG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY291cnNlc1ZpZXcuaW5pdCgpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQZXJzb24ge1xuICBpZDogc3RyaW5nXG4gIGZpcnN0TmFtZTogc3RyaW5nXG4gIGxhc3ROYW1lOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBhZ2U6IG51bWJlclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgYWdlOiBudW1iZXIpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZVxuICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZVxuICAgIHRoaXMuZW1haWwgPSBlbWFpbFxuICAgIHRoaXMuYWdlID0gYWdlXG4gIH1cbn1cbiIsImltcG9ydCB7IFBlcnNvbiB9IGZyb20gXCIuL1BlcnNvblwiXG5pbXBvcnQgeyBTdWJqZWN0LCBUZWFjaGVyU3R1ZGVudENvbnN0cnVjdCB9IGZyb20gXCIuLi90eXBlc1wiXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCJcblxuZXhwb3J0IGNsYXNzIFRlYWNoZXIgZXh0ZW5kcyBQZXJzb24gaW1wbGVtZW50cyBUZWFjaGVyU3R1ZGVudENvbnN0cnVjdCB7XG4gIHN1YmplY3RzOiBTdWJqZWN0W11cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIGFnZTogbnVtYmVyKSB7XG4gICAgc3VwZXIoaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBhZ2UpXG4gICAgdGhpcy5zdWJqZWN0cyA9IFtdXG4gIH1cblxuICBkaXNwbGF5SW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogYCR7dGhpcy5maXJzdE5hbWV9LSR7dGhpcy5sYXN0TmFtZX1gLFxuICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICBhZ2U6IGAke3RoaXMuYWdlfWAsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkVGVhY2hlcnMgPSAoKSA9PiBbXG4gIG5ldyBUZWFjaGVyKG5hbm9pZCgpLCBcIkZyYW5rXCIsIFwiU21pdGhcIiwgXCJmcmFua0Bpby5jb21cIiwgNDMpLFxuICBuZXcgVGVhY2hlcihuYW5vaWQoKSwgXCJMb2dhblwiLCBcIkpvbnNzb25cIiwgXCJsb2dhbkBpby5jb21cIiwgNDcpLFxuICBuZXcgVGVhY2hlcihuYW5vaWQoKSwgXCJNaWFcIiwgXCJHcmVnZXJcIiwgXCJtaWFAaW8uY29tXCIsIDQxKSxcbiAgbmV3IFRlYWNoZXIobmFub2lkKCksIFwiQm9yaXNcIiwgXCJSb29uZXlcIiwgXCJmcmFua0Bpby5jb21cIiwgNTMpLFxuXVxuIiwiaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwiLi4vdmlld3MvbGlzdC12aWV3XCJcbmltcG9ydCB7IGxvYWRUZWFjaGVycyB9IGZyb20gXCIuLi9tb2RlbHMvdGVhY2hlclwiXG5cbmV4cG9ydCBjbGFzcyBUZWFjaGVyQ29udHJvbGxlciB7XG4gIHBhcmVudEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50XG4gIHRlYWNoZXJzVmlldzogTGlzdFZpZXdcbiAgY29uc3RydWN0b3IocGFyZW50RWxlbWVudDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50XG4gICAgdGhpcy50ZWFjaGVyc1ZpZXcgPSBuZXcgTGlzdFZpZXcodGhpcy5wYXJlbnRFbGVtZW50LCBsb2FkVGVhY2hlcnMoKSwgXCJUZWFjaGVyc1wiLCBbXG4gICAgICBcIm5hbWVcIixcbiAgICAgIFwiZW1haWxcIixcbiAgICAgIFwiYWdlXCIsXG4gICAgXSlcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZWFjaGVyc1ZpZXcuaW5pdCgpXG4gIH1cbn1cbiIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIlxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4vUGVyc29uXCJcblxuZXhwb3J0IGNsYXNzIFN0dWRlbnQgZXh0ZW5kcyBQZXJzb24ge1xuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgYWdlOiBudW1iZXIpIHtcbiAgICBzdXBlcihpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIGFnZSlcbiAgfVxuICBkaXNwbGF5SW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogYCR7dGhpcy5maXJzdE5hbWV9LSR7dGhpcy5sYXN0TmFtZX1gLFxuICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICBhZ2U6IGAke3RoaXMuYWdlfWAsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkU3R1ZGVudHMgPSAoKSA9PiBbXG4gIG5ldyBTdHVkZW50KG5hbm9pZCgpLCBcIkZyYW5rXCIsIFwiTWVsbGJlcmdcIiwgXCJmcmFua0Bpc09iamVjdC5jb21cIiwgMjEpLFxuICBuZXcgU3R1ZGVudChuYW5vaWQoKSwgXCJSaW9cIiwgXCJGZXJkaW5hbmRcIiwgXCJyaW9AaXNPYmplY3QuY29tXCIsIDI1KSxcbiAgbmV3IFN0dWRlbnQobmFub2lkKCksIFwiTmVtYW5qYVwiLCBcIlZpZGljXCIsIFwibmVtYW5qYUBpc09iamVjdC5jb21cIiwgMzIpLFxuICBuZXcgU3R1ZGVudChuYW5vaWQoKSwgXCJGcmVkcmlrXCIsIFwibGp1bmdiZXJnXCIsIFwiZnJlZHJpa0Bpc09iamVjdC5jb21cIiwgMzIpLFxuICBuZXcgU3R1ZGVudChuYW5vaWQoKSwgXCJMb3R0YVwiLCBcIlNjaGVsaW5cIiwgXCJsb3R0YUBpc09iamVjdC5jb21cIiwgMjEpLFxuICBuZXcgU3R1ZGVudChuYW5vaWQoKSwgXCJTdGluYVwiLCBcIk9sb2Zzc29uXCIsIFwic2luYUBpc09iamVjdC5jb21cIiwgMjEpLFxuXVxuIiwiZXhwb3J0IGNsYXNzIEl0ZW0ge1xuICBwYXJlbnRFbGVtZW50OiBIVE1MRGl2RWxlbWVudFxuICBkYXRhOiBzdHJpbmdcbiAgY29uc3RydWN0b3IocGFyZW50RWxlbWVudDogSFRNTERpdkVsZW1lbnQsIGRhdGE6IHN0cmluZykge1xuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnRcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgIDxwIGlkPVwiYXBhXCI+JHt0aGlzLmRhdGF9PC9wPlxuICAgIGBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwYVwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMsIFwic3R1ZGVudCBoYXMgYmVlbiBjbGlja2VkXCIpXG4gICAgfSlcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGh0bWwpXG4gIH1cbn1cbiIsImltcG9ydCB7IGxvYWRTdHVkZW50cyB9IGZyb20gXCIuLi9tb2RlbHMvc3R1ZGVudFwiXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL3ZpZXdzL2l0ZW0tdmlld1wiXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gXCIuLi92aWV3cy9saXN0LXZpZXdcIlxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudENvbnRyb2xsZXIge1xuICBwYXJlbnRFbGVtZW50OiBIVE1MRGl2RWxlbWVudFxuICBzdHVkZW50c1ZpZXc6IExpc3RWaWV3XG4gIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudFxuICAgIHRoaXMuc3R1ZGVudHNWaWV3ID0gbmV3IExpc3RWaWV3KHRoaXMucGFyZW50RWxlbWVudCwgbG9hZFN0dWRlbnRzKCksIFwiU3R1ZGVudHNcIiwgW1xuICAgICAgXCJuYW1lXCIsXG4gICAgICBcImVtYWlsXCIsXG4gICAgICBcImFnZVwiLFxuICAgIF0pXG4gIH1cblxuICBoYW5kbGVBZGRTdHVkZW50KCkge1xuICAgIHRoaXMuc3R1ZGVudHNWaWV3LmNsaWNrSGFuZGxlcigoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgc3R1ZGVudCA9IGxvYWRTdHVkZW50cygpLmZpbmQoc3R1ZGVudCA9PiBzdHVkZW50LmlkID09PSBpZClcbiAgICAgIGNvbnN0IGRhdGEgPSBgJHtzdHVkZW50Py5maXJzdE5hbWV9IC0gJHtzdHVkZW50Py5sYXN0TmFtZX1gXG4gICAgICBjb25zdCBuZXdTdHVkZW50SXRlbSA9IG5ldyBJdGVtKHRoaXMucGFyZW50RWxlbWVudCwgZGF0YSlcbiAgICAgIG5ld1N0dWRlbnRJdGVtLnJlbmRlcigpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdHVkZW50c1ZpZXcuaW5pdCgpXG4gICAgdGhpcy5oYW5kbGVBZGRTdHVkZW50KClcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vcGF0dGVybnMvbXZjMi4wL2NvbnRyb2xsZXJzL2FwcFwiXG5pbXBvcnQgeyBDb3Vyc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vcGF0dGVybnMvbXZjMi4wL2NvbnRyb2xsZXJzL2NvdXJzZVwiXG5pbXBvcnQgeyBUZWFjaGVyQ29udHJvbGxlciB9IGZyb20gXCIuL3BhdHRlcm5zL212YzIuMC9jb250cm9sbGVycy90ZWFjaGVyXCJcbmltcG9ydCB7IFN0dWRlbnRDb250cm9sbGVyIH0gZnJvbSBcIi4vcGF0dGVybnMvbXZjMi4wL2NvbnRyb2xsZXJzL3N0dWRlbnRcIlxuOygoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cbiAgbmV3IEFwcChcbiAgICBuZXcgVGVhY2hlckNvbnRyb2xsZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWFjaGVyXCIpIGFzIEhUTUxEaXZFbGVtZW50KSxcbiAgICBuZXcgQ291cnNlQ29udHJvbGxlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZVwiKSBhcyBIVE1MRGl2RWxlbWVudCksXG4gICAgbmV3IFN0dWRlbnRDb250cm9sbGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R1ZGVudFwiKSBhcyBIVE1MRGl2RWxlbWVudClcbiAgKS5yZW5kZXIoKVxufSkoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==