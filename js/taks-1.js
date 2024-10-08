function slugify(title) {
    
    const kleineTitle = title.toLowerCase();
    const slug = kleineTitle.split(' ').join('-');
    
    return slug;
}

