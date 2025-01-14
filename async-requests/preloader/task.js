let xhr = new XMLHttpRequest();
xhr.open("GET", " https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.onload = () => {
    console.log(xhr.response);
}
xhr.send();
