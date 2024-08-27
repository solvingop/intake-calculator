// script.js
document.getElementById('calorie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const activity = document.getElementById('activity').value;

    let bmr;

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    let calorieIntake;

    switch (activity) {
        case 'sedentary':
            calorieIntake = bmr * 1.2;
            break;
        case 'light':
            calorieIntake = bmr * 1.375;
            break;
        case 'moderate':
            calorieIntake = bmr * 1.55;
            break;
        case 'active':
            calorieIntake = bmr * 1.725;
            break;
        case 'very-active':
            calorieIntake = bmr * 1.9;
            break;
    }

    document.getElementById('calorie-result').textContent = `${Math.round(calorieIntake)} kcal/day`;

    const dietPlan = getDietPlan(Math.round(calorieIntake));
    document.getElementById('diet-plan').textContent = dietPlan;

    document.getElementById('result').classList.remove('hidden');
});

function getDietPlan(calories) {
    if (calories < 1500) {
        return "Your intake is low. Consider a balanced diet with healthy fats, proteins, and carbohydrates. Example: Oatmeal with nuts for breakfast, grilled chicken salad for lunch, and a quinoa bowl with vegetables for dinner.";
    } else if (calories >= 1500 && calories <= 2000) {
        return "A moderate diet plan is recommended. Example: Smoothie for breakfast, turkey sandwich for lunch, and baked salmon with vegetables for dinner.";
    } else {
        return "A high-calorie intake suggests a more energy-dense diet. Example: Eggs and toast for breakfast, beef stir-fry for lunch, and pasta with meatballs for dinner.";
    }
}
