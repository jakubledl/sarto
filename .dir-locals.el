((nil
   (eval . (let ((probe-locations (concat (projectile-project-root) "/node_modules")))
             (setq
               lsp-clients-angular-language-server-command
               (list
                 "node"
                 (format "%s/@angular/language-server" probe-locations)
                 "--ngProbeLocations"
                 probe-locations
                 "--tsProbeLocations"
                 probe-locations
                 "--stdio"))))))
