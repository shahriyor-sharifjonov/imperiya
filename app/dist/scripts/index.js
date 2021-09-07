"use strict";var keys={37:1,38:1,39:1,40:1};function preventDefault(a){a.preventDefault()}function preventDefaultForScrollKeys(a){if(keys[a.keyCode])return preventDefault(a),!1}var supportsPassive=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function get(){supportsPassive=!0}}))}catch(a){}var wheelOpt=!!supportsPassive&&{passive:!1},wheelEvent="onwheel"in document.createElement("div")?"wheel":"mousewheel";function disableScroll(){window.addEventListener("DOMMouseScroll",preventDefault,!1),window.addEventListener(wheelEvent,preventDefault,wheelOpt),window.addEventListener("touchmove",preventDefault,wheelOpt),window.addEventListener("keydown",preventDefaultForScrollKeys,!1)}function enableScroll(){window.removeEventListener("DOMMouseScroll",preventDefault,!1),window.removeEventListener(wheelEvent,preventDefault,wheelOpt),window.removeEventListener("touchmove",preventDefault,wheelOpt),window.removeEventListener("keydown",preventDefaultForScrollKeys,!1)}var headerButton=document.querySelector(".header__button"),headerMenu=document.querySelector(".header__menu"),menuOpened=!1;function checkMenu(){menuOpened?disableScroll():enableScroll()}var menuToggle=function(){menuOpened=!menuOpened,checkMenu(),headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()},document.querySelector(".sponsors__body")&&$(".sponsors__body").slick({slidesToShow:5,centerMode:!1,variableWidth:!1,infinite:!0,arrows:!1,autoplay:!0,autoplaySpeed:1500,responsive:[{breakpoint:992,settings:{slidesToShow:4,infinite:!0,centerPadding:"0px",centerMode:!0,slidesToScroll:1,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,dots:!0,infinite:!0,centerPadding:"0px",centerMode:!0,slidesToScroll:1}},{breakpoint:500,settings:{slidesToShow:2,dots:!0,infinite:!0,centerPadding:"0px",centerMode:!0,slidesToScroll:1}}]}),document.querySelector(".catering__slider")&&$(".catering__slider").slick({slidesToShow:3,slidesToScroll:1,centerMode:!1,variableWidth:!0,infinite:!1,arrows:!1,responsive:[{breakpoint:992,settings:{}}]}),document.querySelector(".prods__cats")&&$(".prods__cats").slick({slidesToShow:7,slidesToScroll:1,centerMode:!1,variableWidth:!0,infinite:!1,arrows:!1,responsive:[{breakpoint:576,settings:{slidesToShow:4}}]});function addActive(a){a.classList.toggle("active")}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImtleXMiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJrZXlDb2RlIiwic3VwcG9ydHNQYXNzaXZlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwid2hlZWxPcHQiLCJwYXNzaXZlIiwid2hlZWxFdmVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpc2FibGVTY3JvbGwiLCJlbmFibGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVhZGVyQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImhlYWRlck1lbnUiLCJtZW51T3BlbmVkIiwiY2hlY2tNZW51IiwibWVudVRvZ2dsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uY2xpY2siLCJjb21wb3NlZFBhdGgiLCJpbmNsdWRlcyIsIiQiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImNlbnRlck1vZGUiLCJ2YXJpYWJsZVdpZHRoIiwiaW5maW5pdGUiLCJhcnJvd3MiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2VudGVyUGFkZGluZyIsInNsaWRlc1RvU2Nyb2xsIiwiZG90cyIsImFkZEFjdGl2ZSIsImVsIl0sIm1hcHBpbmdzIjoiYUFBQSxHQUFJQSxDQUFBQSxJQUFJLENBQUcsQ0FBQyxHQUFJLENBQUwsQ0FBUSxHQUFJLENBQVosQ0FBZSxHQUFJLENBQW5CLENBQXNCLEdBQUksQ0FBMUIsQ0FBWCxDQUNBLFFBQVNDLENBQUFBLGNBQVQsQ0FBd0JDLENBQXhCLENBQXlCLENBQ3ZCQSxDQUFDLENBQUNELGNBQUYsRUFDRCxDQUNELFFBQVNFLENBQUFBLDJCQUFULENBQXFDRCxDQUFyQyxDQUFzQyxDQUNwQyxHQUFJRixJQUFJLENBQUNFLENBQUMsQ0FBQ0UsT0FBSCxD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LGNBQWMsQ0FBRSxDQUZNLENBR3RCVixVQUFVLEdBSFksQ0FJdEJDLGFBQWEsR0FKUyxDQUt0QkMsUUFBUSxHQUxjLENBTXRCQyxNQUFNLEdBTmdCLENBT3RCRyxVQUFVLENBQUUsQ0FDVixDQUNFQyxVQUFVLENBQUUsR0FEZCxDQUVFQyxRQUFRLENBQUUsQ0FDUlQsWUFBWSxDQUFFLENBRE4sQ0FGWixDQURVLENBUFUsQ0FBeEIsQyxDQWtCRixRQUFTYSxDQUFBQSxTQUFULENBQW1CQyxDQUFuQixDQUFxQixDQUNuQkEsQ0FBRSxDQUFDckIsU0FBSCxDQUFhQyxNQUFiLENBQW9CLFFBQXBCLENBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIga2V5cyA9IHszNzogMSwgMzg6IDEsIDM5OiAxLCA0MDogMX07XHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuZnVuY3Rpb24gcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcclxuICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XHJcbiAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuLy8gbW9kZXJuIENocm9tZSByZXF1aXJlcyB7IHBhc3NpdmU6IGZhbHNlIH0gd2hlbiBhZGRpbmcgZXZlbnRcclxudmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xyXG50cnkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7IH0gXHJcbiAgfSkpO1xyXG59IGNhdGNoKGUpIHt9XHJcbnZhciB3aGVlbE9wdCA9IHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlO1xyXG52YXIgd2hlZWxFdmVudCA9ICdvbndoZWVsJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSA/ICd3aGVlbCcgOiAnbW91c2V3aGVlbCc7XHJcbi8vIGNhbGwgdGhpcyB0byBEaXNhYmxlXHJcbmZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgcHJldmVudERlZmF1bHQsIGZhbHNlKTsgLy8gb2xkZXIgRkZcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih3aGVlbEV2ZW50LCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2Rlcm4gZGVza3RvcFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2JpbGVcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cywgZmFsc2UpO1xyXG59XHJcbi8vIGNhbGwgdGhpcyB0byBFbmFibGVcclxuZnVuY3Rpb24gZW5hYmxlU2Nyb2xsKCkge1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XHJcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIod2hlZWxFdmVudCwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTsgXHJcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7XHJcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMsIGZhbHNlKTtcclxufVxyXG4vLyBIZWFkZXIgTWVudVxyXG5jb25zdCBoZWFkZXJCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uXCIpO1xyXG5jb25zdCBoZWFkZXJNZW51OiBIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnVcIik7XHJcbmxldCBtZW51T3BlbmVkID0gZmFsc2U7XHJcbmZ1bmN0aW9uIGNoZWNrTWVudSgpe1xyXG4gIGlmKG1lbnVPcGVuZWQpe1xyXG4gICAgZGlzYWJsZVNjcm9sbCgpXHJcbiAgfWVsc2V7XHJcbiAgICBlbmFibGVTY3JvbGwoKVxyXG4gIH1cclxufVxyXG5jb25zdCBtZW51VG9nZ2xlID0gKCkgPT4ge1xyXG4gIG1lbnVPcGVuZWQgPSAhbWVudU9wZW5lZDtcclxuICBjaGVja01lbnUoKVxyXG4gIGhlYWRlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICBoZWFkZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG59O1xyXG5oZWFkZXJCdXR0b24ub25jbGljayA9IG1lbnVUb2dnbGU7XHJcbndpbmRvdy5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICBpZiAoXHJcbiAgICBtZW51T3BlbmVkICYmXHJcbiAgICAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJCdXR0b24pICYmXHJcbiAgICAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJNZW51KVxyXG4gIClcclxuICAgIG1lbnVUb2dnbGUoKTtcclxufTtcclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwb25zb3JzX19ib2R5Jykpe1xyXG4gICQoJy5zcG9uc29yc19fYm9keScpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDE1MDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgIC8vIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDUwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgIC8vIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIF1cclxuICB9KTtcclxufVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZXJpbmdfX3NsaWRlcicpKXtcclxuICAkKCcuY2F0ZXJpbmdfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSk7XHJcbn1cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2RzX19jYXRzJykpe1xyXG4gICQoJy5wcm9kc19fY2F0cycpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIF1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQWN0aXZlKGVsKXtcclxuICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxufSJdfQ==
