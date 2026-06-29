let blogs = [];

function renderBlogs(list, container = "blogs") {
	const blogList = document.getElementById(container);
	blogList.innerHTML = "";

	list.forEach(blog => {
		const card = document.createElement("div");
		card.className = "blog__card";

		card.innerHTML = `
	    <div class="dropcap">
		<a href="/pages/posts/${blog.url}">${blog.title}</a>
		<span class="blog-date">${blog.date}</span><br>
		<span class="blog-desc">${blog.desc}</span>
	    </div>
	`;

		blogList.appendChild(card);
	});
}

function filterBlogs({
	tag = null,
	predicate = null,
	limit = null
} = {}) {
	let list = blogs;

	if (tag)
		list = list.filter(b => b.tags.includes(tag));

	if (predicate)
		list = list.filter(predicate);

	if (limit)
		list = list.slice(0, limit);

	return list;
}

async function loadBlogs() {
	const response = await fetch("/pages/blog.json");
	blogs = await response.json();
	return blogs;
}
