"use strict";var keys={37:1,38:1,39:1,40:1};function preventDefault(a){a.preventDefault()}function preventDefaultForScrollKeys(a){if(keys[a.keyCode])return preventDefault(a),!1}var supportsPassive=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function get(){supportsPassive=!0}}))}catch(a){}var wheelOpt=!!supportsPassive&&{passive:!1},wheelEvent="onwheel"in document.createElement("div")?"wheel":"mousewheel";function disableScroll(){window.addEventListener("DOMMouseScroll",preventDefault,!1),window.addEventListener(wheelEvent,preventDefault,wheelOpt),window.addEventListener("touchmove",preventDefault,wheelOpt),window.addEventListener("keydown",preventDefaultForScrollKeys,!1)}function enableScroll(){window.removeEventListener("DOMMouseScroll",preventDefault,!1),window.removeEventListener(wheelEvent,preventDefault,wheelOpt),window.removeEventListener("touchmove",preventDefault,wheelOpt),window.removeEventListener("keydown",preventDefaultForScrollKeys,!1)}var headerButton=document.querySelector(".header__button"),headerMenu=document.querySelector(".header__menu"),menuOpened=!1;function checkMenu(){menuOpened?disableScroll():enableScroll()}var menuToggle=function(){menuOpened=!menuOpened,checkMenu(),headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()},document.querySelector(".sponsors__body")&&$(".sponsors__body").slick({slidesToShow:5,centerMode:!1,variableWidth:!1,infinite:!0,arrows:!1,autoplay:!0,responsive:[{breakpoint:992,settings:{slidesToShow:4,infinite:!0,centerPadding:"0px",centerMode:!0,slidesToScroll:1,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,dots:!0,infinite:!0,centerPadding:"0px",centerMode:!0,slidesToScroll:1}},{breakpoint:500,settings:{slidesToShow:2,dots:!0,infinite:!0,centerPadding:"0px",centerMode:!0,slidesToScroll:1}}]}),document.querySelector(".catering__slider")&&$(".catering__slider").slick({slidesToShow:3,slidesToScroll:1,centerMode:!1,variableWidth:!0,infinite:!1,arrows:!1,responsive:[{breakpoint:992,settings:{}}]}),document.querySelector(".prods__cats")&&$(".prods__cats").slick({slidesToShow:7,slidesToScroll:1,centerMode:!1,variableWidth:!0,infinite:!1,arrows:!1,responsive:[{breakpoint:576,settings:{slidesToShow:4}}]});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImtleXMiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJrZXlDb2RlIiwic3VwcG9ydHNQYXNzaXZlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwid2hlZWxPcHQiLCJwYXNzaXZlIiwid2hlZWxFdmVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpc2FibGVTY3JvbGwiLCJlbmFibGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVhZGVyQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImhlYWRlck1lbnUiLCJtZW51T3BlbmVkIiwiY2hlY2tNZW51IiwibWVudVRvZ2dsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uY2xpY2siLCJjb21wb3NlZFBhdGgiLCJpbmNsdWRlcyIsIiQiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImNlbnRlck1vZGUiLCJ2YXJpYWJsZVdpZHRoIiwiaW5maW5pdGUiLCJhcnJvd3MiLCJhdXRvcGxheSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjZW50ZXJQYWRkaW5nIiwic2xpZGVzVG9TY3JvbGwiLCJkb3RzIl0sIm1hcHBpbmdzIjoiYUFBQSxHQUFJQSxDQUFBQSxJQUFJLENBQUcsQ0FBQyxHQUFJLENBQUwsQ0FBUSxHQUFJLENBQVosQ0FBZSxHQUFJLENBQW5CLENBQXNCLEdBQUksQ0FBMUIsQ0FBWCxDQUNBLFFBQVNDLENBQUFBLGNBQVQsQ0FBd0JDLENBQXhCLENBQXlCLENBQ3ZCQSxDQUFDLENBQUNELGNBQUYsRUFDRCxDQUNELFFBQVNFLENBQUFBLDJCQUFULENBQXFDRCxDQUFyQyxDQUFzQyxDQUNwQyxHQUFJRixJQUFJLENBQUNFLENBQUMsQ0FBQ0UsT0FBSCxDQUFSLENBRUUsTUFEQUgsQ0FBQUEsY0FBYyxDQUFDQyxD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QyxRQUFRLEdBTGMsQ0FNdEJDLE1BQU0sR0FOZ0IsQ0FPdEJFLFVBQVUsQ0FBRSxDQUNWLENBQ0VDLFVBQVUsQ0FBRSxHQURkLENBRUVDLFFBQVEsQ0FBRSxDQUNSUixZQUFZLENBQUUsQ0FETixDQUZaLENBRFUsQ0FQVSxDQUF4QixDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGtleXMgPSB7Mzc6IDEsIDM4OiAxLCAzOTogMSwgNDA6IDF9O1xyXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XHJcbiAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xyXG4gICAgcHJldmVudERlZmF1bHQoZSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbi8vIG1vZGVybiBDaHJvbWUgcmVxdWlyZXMgeyBwYXNzaXZlOiBmYWxzZSB9IHdoZW4gYWRkaW5nIGV2ZW50XHJcbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcclxudHJ5IHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcclxuICAgIGdldDogZnVuY3Rpb24gKCkgeyBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlOyB9IFxyXG4gIH0pKTtcclxufSBjYXRjaChlKSB7fVxyXG52YXIgd2hlZWxPcHQgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZTtcclxudmFyIHdoZWVsRXZlbnQgPSAnb253aGVlbCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgPyAnd2hlZWwnIDogJ21vdXNld2hlZWwnO1xyXG4vLyBjYWxsIHRoaXMgdG8gRGlzYWJsZVxyXG5mdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7IC8vIG9sZGVyIEZGXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIod2hlZWxFdmVudCwgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTsgLy8gbW9kZXJuIGRlc2t0b3BcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIHdoZWVsT3B0KTsgLy8gbW9iaWxlXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMsIGZhbHNlKTtcclxufVxyXG4vLyBjYWxsIHRoaXMgdG8gRW5hYmxlXHJcbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcclxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHdoZWVsRXZlbnQsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7IFxyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpO1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzLCBmYWxzZSk7XHJcbn1cclxuLy8gSGVhZGVyIE1lbnVcclxuY29uc3QgaGVhZGVyQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvblwiKTtcclxuY29uc3QgaGVhZGVyTWVudTogSFRNTFVMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51XCIpO1xyXG5sZXQgbWVudU9wZW5lZCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBjaGVja01lbnUoKXtcclxuICBpZihtZW51T3BlbmVkKXtcclxuICAgIGRpc2FibGVTY3JvbGwoKVxyXG4gIH1lbHNle1xyXG4gICAgZW5hYmxlU2Nyb2xsKClcclxuICB9XHJcbn1cclxuY29uc3QgbWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICBtZW51T3BlbmVkID0gIW1lbnVPcGVuZWQ7XHJcbiAgY2hlY2tNZW51KClcclxuICBoZWFkZXJCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxufTtcclxuaGVhZGVyQnV0dG9uLm9uY2xpY2sgPSBtZW51VG9nZ2xlO1xyXG53aW5kb3cub25jbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgbWVudU9wZW5lZCAmJlxyXG4gICAgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyQnV0dG9uKSAmJlxyXG4gICAgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyTWVudSlcclxuICApXHJcbiAgICBtZW51VG9nZ2xlKCk7XHJcbn07XHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcG9uc29yc19fYm9keScpKXtcclxuICAkKCcuc3BvbnNvcnNfX2JvZHknKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgIC8vIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDUwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgIC8vIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIF1cclxuICB9KTtcclxufVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZXJpbmdfX3NsaWRlcicpKXtcclxuICAkKCcuY2F0ZXJpbmdfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSk7XHJcbn1cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2RzX19jYXRzJykpe1xyXG4gICQoJy5wcm9kc19fY2F0cycpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIF1cclxuICB9KTtcclxufSJdfQ==
