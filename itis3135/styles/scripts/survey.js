document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('intro-form');
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('result-content');
    const coursesDiv = document.getElementById('courses');

   
    function validateForm() {
        const requiredFields = form.querySelectorAll('[required]');
        return Array.from(requiredFields).every((input) => {
            return input.type === 'checkbox' ? input.checked : input.value.trim() !== '';
        });
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

   
    function displayResult() {
        const formData = new FormData(form);
        let resultHtml = '';

        formData.forEach((value, key) => {
            if (key === 'image') {
                const file = formData.get('image');
                if (file && file.type.startsWith('image/')) {
                    const imageURL = URL.createObjectURL(file);
                    resultHtml += `<p><strong>${capitalizeFirstLetter(key)}:</strong><br><img src="${imageURL}" alt="Uploaded Image" width="200px"></p>`;
                } else {
                    resultHtml += `<p><strong>${capitalizeFirstLetter(key)}:</strong> No image uploaded</p>`;
                }
            } else {
                resultHtml += `<p><strong>${capitalizeFirstLetter(key)}:</strong> ${value}</p>`;
            }
        });

        resultContent.innerHTML = resultHtml;
        resultDiv.style.display = 'block';
        form.style.display = 'none';
    }

    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            displayResult();
        } else {
            alert("Please fill out all required fields.");
        }
    });

   
    window.addCourse = function () {
        const container = document.createElement('div');
        container.classList.add('course-entry');
        container.classList.add('mb-2'); 

        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'courses';
        input.placeholder = 'Enter another course';
        input.required = true;
        input.classList.add('mr-2'); 

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => container.remove());

        container.appendChild(input);
        container.appendChild(deleteBtn);
        coursesDiv.appendChild(container);
    };

    
    window.resetForm = function () {
        form.reset();
        resultDiv.style.display = 'none';
        resultContent.innerHTML = '';
        form.style.display = 'block';

       
        const extras = coursesDiv.querySelectorAll('.course-entry');
        extras.forEach((entry) => entry.remove());
    };
});