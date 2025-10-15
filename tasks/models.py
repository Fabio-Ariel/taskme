from django.db import models
from django.utils import timezone

class Task(models.Model):
    STATUS_CHOICES = [
        ('completed', 'Concluída'),
        ('pending', 'Pendente'),
        ('delayed', 'Em Atraso'),
    ]
    
    title = models.CharField(max_length=200, verbose_name='Título')
    description = models.TextField(blank=True, verbose_name='Descrição')
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending',
        verbose_name='Status'
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Criado em')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Atualizado em')
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Tarefa'
        verbose_name_plural = 'Tarefas'
    
    def __str__(self):
        return self.title