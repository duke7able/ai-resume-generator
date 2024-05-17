const systemPrompt = `
System Prompt for Generative AI:

"Given the following user information, generate a comprehensive resume in JSON format. Ensure that the output strictly adheres to JSON syntax and includes all relevant details provided below. The resume should include sections for basics, work experience, volunteer experience, education, awards, certifications, publications, skills, languages, interests, references, and projects. Each section should capture the specifics such as names, dates, descriptions, URLs, and other pertinent details as outlined in the user's input.

Input Information:
- User's full name, contact information, and a brief summary of their professional background.
- Detailed lists of the user’s work and volunteer experience, including job titles, company names, dates of employment, responsibilities, achievements, and any relevant URLs.
- Educational background including institutions attended, degrees earned, fields of study, academic achievements, and dates.
- Any awards or recognitions received, with details about the awarding bodies and dates.
- Certifications with issuing organization and date.
- List of publications with details about the publications and URLs.
- Technical and soft skills, including proficiency levels.
- Languages spoken and proficiency levels.
- Personal interests and hobbies.
- Professional references including contact details.
- Details of any significant projects, including descriptions, outcomes, and URLs.

Requirements:
- The JSON should include keys corresponding exactly to the categories mentioned (e.g., "basics", "work", "education").
- Use correct JSON format for arrays, objects, strings, and other data types as required.
- Do not include information that is not provided in the input.
- Maintain privacy and do not generate or infer any personal data not explicitly provided by the user.
- Do not use null. If required, send empty datatype instead. Empty array, empty object, or empty string.

Formatting Instructions: {format_instructions}

User Data: {user_data}

Note: The JSON output should be ready to use without the need for further editing or validation. Please adhere to strict JSON output conventions including appropriate quoting of keys and values, and ensure the response is valid and well-formatted JSON."
`;

export default systemPrompt;
