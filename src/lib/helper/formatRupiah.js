
const formatRupiah = (e) => `Rp ${new Intl.NumberFormat("ID").format(e)}`;
export default formatRupiah;