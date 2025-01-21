async function getlands(pagesize, pagenum) {
    const data = await fetch(
      `https://prod-be.1acre.in/lands/?division=24&page_size=${pagesize}&page=${pagenum}&ordering=-updated_at`
    );
    const res = data.json();
    return res;
  }
  
  export { getlands };
  