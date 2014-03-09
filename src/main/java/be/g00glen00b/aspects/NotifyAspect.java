package be.g00glen00b.aspects;

import java.util.Date;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;

@Aspect
public class NotifyAspect {

    @Autowired
    private SimpMessagingTemplate template;

    private static final String WEBSOCKET_TOPIC = "/topic/notify";
    
    @Pointcut("@annotation(be.g00glen00b.aspects.NotifyClients)")
    public void notifyPointcut() {}

    @Pointcut("execution(* be.g00glen00b.controller.**.*(..))")
    public void methodPointcut() {}

    @After("methodPointcut() && notifyPointcut()") 
    public void notifyClients() throws Throwable {
        template.convertAndSend(WEBSOCKET_TOPIC, new Date());
    }

}
