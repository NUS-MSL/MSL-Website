#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import subprocess
import sys

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'website_controller.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    if 'runserver' in sys.argv:
        frontend_dir = os.path.join(os.path.dirname(__file__), 'website_frontend')
        npm_process = subprocess.Popen(['npm', 'run', 'dev'], cwd=frontend_dir)

    try:
        execute_from_command_line(sys.argv)
    finally:
        if 'npm_process' in locals():
            npm_process.terminate()

if __name__ == '__main__':
    main()
