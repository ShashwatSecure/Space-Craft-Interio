export const City = [
    "BOKARO",
    "DEOGHAR",
    "DHANBAD",
    "EAST SINGHBHUM",
    "GIRIDIH",
    "HAZARIBAGH",
    "KODARMA",
    "RAMGARH",
    "RANCHI",
    "SARAIKELA",
    "WEST SINGHBHUM",
    "OTHERS",
]

export const Property = [
    { value: "ONE_BHK", label: "1BHK" },
    { value: "TWO_BHK", label: "2BHK" },
    { value: "THREE_BHK", label: "3BHK" },
    { value: "FOUR_BHK_OR_DUPLEX", label: "4BHK/Duplex" },
]

export const FreeConsultationEmailTemplateGenerator = (adminName: string, clientName: string, clientPhone: string, design: string) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Request for Free Consultation Booking</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <p>Dear <strong>${adminName}</strong>,</p>

    <p>I hope this email finds you well. I would like to request a free consultation for the design, <strong>${design}</strong> to discuss.</p>

    <p>Please let me know the available time slots at your earliest convenience. I am happy to adjust my schedule accordingly. If any additional information is required beforehand, please feel free to let me know.</p>

    <p>Looking forward to your response.</p>

    <p>Best regards,</p>
    <p><strong>${clientName}</strong><br>
       ${clientPhone}<br>
    </p>
</body>
</html>

`
}