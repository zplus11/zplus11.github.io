document.addEventListener("DOMContentLoaded", function () {

    	fetch(window.location.origin+"/pages/blog.json")
	.then(response => response.json())
        .then(data => {
        	const blogList = document.getElementById("blogs__list");
    		const tagFilter = document.getElementById("tag-filter");
		
        	let allTags = new Set();

        	function renderBlogs(filterTag = "all") {
        		blogList.innerHTML = ""; 

                	data.forEach(blog => {
            			if (filterTag === "all" || blog.tags.includes(filterTag)) {
                			const blogCard = document.createElement("div");
                			blogCard.classList.add("blog__card");

                        		blogCard.innerHTML = `
                            		<strong><a href="posts/${blog.url}">${blog.title}</a></strong>
                        		<p class="blog__date"><i>${blog.date}</i></p>
                    			<div>${blog.desc}<br>
					<strong>Tags:</strong> ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join(", ")}</div>`;

                       			blogList.appendChild(blogCard);
				}
			});
		}

		data.forEach(blog => blog.tags.forEach(tag => allTags.add(tag)));

            	allTags.forEach(tag => {
                	let btn = document.createElement("button");
                	btn.classList.add("tag-btn");
        		btn.textContent = tag;
        		btn.dataset.tag = tag;
			tagFilter.appendChild(btn);
            	});

            	tagFilter.addEventListener("click", function (e) {
                	if (e.target.classList.contains("tag-btn")) {
                		renderBlogs(e.target.dataset.tag);
        		}
    		});

		renderBlogs();
	});
});
