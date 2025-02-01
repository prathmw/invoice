document.getElementById('invoiceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        date: document.getElementById('date').value,
        receiptNumber: document.getElementById('receiptNumber').value,
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        paymentId: document.getElementById('paymentId').value
    };

    document.getElementById('previewReceiptNumber').textContent = formData.receiptNumber;
    document.getElementById('previewName').textContent = formData.name;
    document.getElementById('previewMobile').textContent = formData.mobile;
    document.getElementById('previewEmail').textContent = formData.email;
    document.getElementById('previewPaymentId').textContent = formData.paymentId;
    document.getElementById('previewDate').textContent = new Date(formData.date).toLocaleDateString();

    const lineItems = [{
        item: "1 Year Yoga Everyday",
        description: "Yoga Everyday",
        price: 3388.98,
        quantity: 1,
        totalAmount: 3999
    }];

    const tbody = document.getElementById('lineItems');
    tbody.innerHTML = '';

    lineItems.forEach(item => {
        tbody.innerHTML += `<tr>
            <td>${item.item}</td>
            <td>${item.description}</td>
            <td class="text-right">₹ ${item.price.toFixed(2)}</td>
            <td class="text-right">${item.quantity}</td>
            <td class="text-right">₹ ${item.totalAmount.toFixed(2)}</td>
        </tr>`;
    });

    document.getElementById('totalAmount').textContent = `₹ ${lineItems[0].totalAmount.toFixed(2)}`;

    const contactInfo = `
        <div class="text-left mb-4">
            <p>Contact us:</p>
            <p>Whatsapp: +918600087862</p>
            <p>Email: yogaeveryday@habuild.in</p>
            <p>Happy Habit Building :)</p>
        </div>
    `;
    document.getElementById('invoiceContainer').insertAdjacentHTML('beforeend', contactInfo);
    document.getElementById('invoiceContainer').classList.remove('hidden');
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    html2pdf().from(document.getElementById('invoiceContainer')).save();
});
