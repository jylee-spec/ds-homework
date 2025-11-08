// DOM(문서 객체 모델)이 모두 로드된 후 스크립트 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // HTML에서 id가 'contactButton'인 요소를 찾습니다.
    const contactButton = document.getElementById('contactButton');

    // 버튼이 존재하는지 확인
    if (contactButton) {
        // 버튼에 'click' 이벤트 리스너(경청자)를 추가합니다.
        contactButton.addEventListener('click', function() {
            // 버튼을 클릭하면 알림창(alert)을 띄웁니다.
            alert('문의해 주셔서 감사합니다! (example@solution.com)');
        });
    }

});