from django.http import HttpRequest, JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
@require_http_methods(["GET", "POST"])
def dashboard(request: HttpRequest):
    if request.method == "GET":
        # Add your dashboard data retrieval logic here
        return JsonResponse({
            "status": "success",
            "message": "Dashboard data retrieved successfully",
            "data": {}  # Add your dashboard data here
        })
    return JsonResponse({"status": "error", "message": "Method not allowed"}, status=405)

@csrf_exempt
@require_http_methods(["POST"])
def chatwithai(request: HttpRequest):
    try:
        data = json.loads(request.body)
        # Add your AI chat processing logic here
        return JsonResponse({
            "status": "success",
            "message": "Message processed successfully",
            "response": {}  # Add your AI response here
        })
    except json.JSONDecodeError:
        return JsonResponse({"status": "error", "message": "Invalid JSON"}, status=400)
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)}, status=500)

