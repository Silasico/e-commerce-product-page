let number = 0
const menu = document.querySelector(".links")
const toggleMenu = document.querySelector(".menu-toggle")
const overlay = document.querySelector(".overlay")
const closeMenu = document.querySelector(".close-menu")
const cart = document.querySelector(".cart-open")
const cartBtn = document.querySelector(".cart-img")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
let cartNumbers = document.querySelectorAll(".cart-number")
const cartBody = document.querySelector(".cart-body")
const total = document.querySelector(".total")
const empty = document.querySelector(".empty")
let addCart = document.getElementById("add-btn")
const imgThumbs = document.querySelectorAll(".img-thumbs")
const deleteCart = document.querySelector(".delete-cart-btn")
const main = document.querySelector("main")
const nav = document.querySelector("nav")
let showNo = document.querySelector("#cart-no")
const imgThumbsShowcase = document.querySelectorAll(".img-thumbs-showcase")
const productPreviewShowcase = document.querySelector("#product-preview-showcase")
const showcase = document.querySelector(".showcase")
const closeShowcase = document.querySelector(".close-showcase")
const previewProduct = document.querySelector("#product-preview")
const checkout = document.querySelector("#checkout")

checkout.addEventListener("click", function(){
	if (number === 0) {
		alert("you have no product in your cart. Please add items to your cart to continue🤗")
	} else{
		alert(`you have successfully checked out ${total.innerText}`)
		number = 0
		checkCart()
		cart.classList.remove("cart-show")
		cartNumbers.forEach(function(cartNo){
			cartNo.innerText = number
		})
		main.style.zIndex = "0"
	}
})


closeShowcase.addEventListener("click", function(){
	showcase.style.display = "none"
})


imgThumbsShowcase.forEach(function(imgThumbShowcase){
	imgThumbShowcase.addEventListener("click", function(){
		imgThumbsShowcase.forEach(function(removeActive){
			removeActive.classList.remove("active")
		})
		imgThumbShowcase.classList.add("active")
		
		
		if(imgThumbShowcase.firstElementChild.src === `file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg`) {
			pictureNo = 0
			showPicture(productPreviewShowcase)
		}
		if(imgThumbShowcase.firstElementChild.src === `file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg`) {
			pictureNo = 1
			showPicture(productPreviewShowcase)
		}
		if(imgThumbShowcase.firstElementChild.src === `file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg`) {
			pictureNo = 2
			showPicture(productPreviewShowcase)
		}
		if(imgThumbShowcase.firstElementChild.src === `file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg`) {
			pictureNo = 3
			showPicture(productPreviewShowcase)
		}
	})
})


showNo.style.display = "none"

deleteCart.addEventListener("click", function(){
	number = 0
	checkCart()
	
	cartNumbers.forEach(function(cartNo){
		cartNo.innerText = number
	})
})



let pictureNo = 0
showPicture(productPreviewShowcase)

previewProduct.addEventListener("click", function(){
	showcase.style.display = "flex"
})
imgThumbs.forEach(function(imgThumb){

	imgThumb.addEventListener("click", function(){
		imgThumbs.forEach(function(removeActive){
			removeActive.classList.remove("active")
		})
		imgThumb.classList.add("active")
		
		
		if(imgThumb.firstElementChild.src === `file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg`) {
			pictureNo = 0
			showPicture(previewProduct)
		}
		if(imgThumb.firstElementChild.src === `file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg`) {
			pictureNo = 1
			showPicture(previewProduct)
		}
		if(imgThumb.firstElementChild.src === `file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg`) {
			pictureNo = 2
			showPicture(previewProduct)
		}
		if(imgThumb.firstElementChild.src === `file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg`) {
			pictureNo = 3
			showPicture(previewProduct)
		}
		
	})
	
})






function showPicture(img) {
	if (pictureNo === 0) {
	img.src = "images/image-product-1.jpg"
	}
	if (pictureNo === 1) {
	img.src = "images/image-product-2.jpg"
	}
	if (pictureNo === 2) {
	img.src = "images/image-product-3.jpg"
	}
	if (pictureNo === 3) {
	img.src = "images/image-product-4.jpg"
	}
}



toggleMenu.addEventListener("click", function(){
	menu.style.left = "0"
	overlay.style.display = "block"
	
})
closeMenu.addEventListener("click", function(){
	menu.style.left = "-200px"
	overlay.style.display = "none"
})

cartBtn.addEventListener("click", function(){
	checkCart()
	cart.classList.toggle("cart-show")
	if (cart.classList.contains("cart-show")) {
		main.style.zIndex = "-1"
		
	} else{
		main.style.zIndex = "0"
	}
})

plus.addEventListener("click", function(){
	number++
	cartNumbers.forEach(function(cartNo){
		cartNo.innerText = number
	})
	checkCart()
})
minus.addEventListener("click", function(){
	if (number > 0) {
		number--
		
		cartNumbers.forEach(function(cartNo){
			cartNo.innerText = number
		})
	}
	checkCart()
})

function checkCart() {
	if (number === 0) {
		cartBody.style.display = "none"
		empty.style.display = "block"
		showNo.style.display = "none"
	}else{
		cartBody.style.display = "flex"
		empty.style.display = "none"
		total.innerText = 125 * number
		total.innerText ="$" + total.innerText +".00"
		showNo.style.display = "block"
	}
	
}

addCart.addEventListener("click", function(e){
	e.preventDefault()
	if (number === 0) {
		number++
		cartNumbers.forEach(function(cartNo){
		cartNo.innerText = number
		checkCart()
		})
	}else{
		alert("Product already in cart, click the plus sign to add multiple items")
		}
		
})

